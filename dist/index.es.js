import { useState, useMemo } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/**
 * Give statefull lists for selected and unselected items and a swap function
 * @param allItems The complete list, including both selected and unselected items
 * @param preSelected start the hook with pre filled selected items list
 * @returns
 */

var useSwap = function (allItems, preSelected, primaryKey) {
  var itemKey = primaryKey || 'primaryKey';

  var _a = __read(useState(preSelected || []), 2),
      selectedItems = _a[0],
      setSelectedItems = _a[1];

  var onSelect = function (itemPrimaryKey) {
    var selectedItem = allItems.find(function (eachItem) {
      return eachItem[itemKey] === itemPrimaryKey;
    });
    var tempSelectedArray = Array.from(selectedItems);

    if (selectedItem) {
      tempSelectedArray.push(selectedItem);
    }

    setSelectedItems(tempSelectedArray);
  };

  var onRemove = function (itemPrimaryKey) {
    var newSelectedItems = selectedItems.filter(function (eachItem) {
      return eachItem[itemKey] !== itemPrimaryKey;
    });
    setSelectedItems(newSelectedItems);
  };
  /**
   * swaps the item with matching itemPrimaryKey between selected and unselected item list
   * @param itemPrimaryKey string
   */


  var swap = function (itemPrimaryKey) {
    var isSelected = selectedItems.some(function (eachItem) {
      return eachItem[itemKey] === itemPrimaryKey;
    });

    if (isSelected) {
      onRemove(itemPrimaryKey);
    } else {
      onSelect(itemPrimaryKey);
    }
  };

  var unSeletedItems = useMemo(function () {
    return allItems.filter(function (item) {
      return selectedItems.length > 0 ? !selectedItems.find(function (selectedItem) {
        return selectedItem[itemKey] === item[itemKey];
      }) : true;
    });
  }, [selectedItems, allItems, itemKey]);
  return {
    selectedItems: selectedItems,
    unSeletedItems: unSeletedItems,
    swap: swap
  };
};

export { useSwap as default };
