import  { useState, useMemo } from "react";

export interface item {
  primaryKey?: string;
}
export type itemArray = Array<item>

export interface returnValue {
  selectedItems: Array<item>;
  unSeletedItems: Array<item>;
  swap: (primaryKey:string)=>void;
}

/**
 * Give statefull lists for selected and unselected items and a swap function
 * @param allItems The complete list, including both selected and unselected items
 * @param preSelected start the hook with pre filled selected items list
 * @returns 
 */
const useSwap = ( allItems:itemArray, preSelected?:itemArray, primaryKey?:string): returnValue => {
    const itemKey:string = primaryKey || 'primaryKey'
    
  const [selectedItems, setSelectedItems]: [itemArray, any] = useState(preSelected||[]);

  const onSelect = (itemPrimaryKey: string) => {
    const selectedItem = allItems.find((eachItem) => {
      return eachItem[itemKey] === itemPrimaryKey;
    });
    const tempSelectedArray:itemArray = Array.from(selectedItems)
    if (selectedItem) {
      tempSelectedArray.push(selectedItem)
    }
    setSelectedItems(tempSelectedArray);
  };

  const onRemove = (itemPrimaryKey: string) => {
    const newSelectedItems = selectedItems.filter(
      (eachItem) => eachItem[itemKey] !== itemPrimaryKey
    );
    setSelectedItems(newSelectedItems);
  };

  /**
   * swaps the item with matching itemPrimaryKey between selected and unselected item list
   * @param itemPrimaryKey string
   */
  const swap = (itemPrimaryKey: string) => {
    const isSelected = selectedItems.some((eachItem) => {
      return eachItem[itemKey] === itemPrimaryKey;
    });

    if (isSelected) {
      onRemove(itemPrimaryKey);
    } else {
      onSelect(itemPrimaryKey);
    }
  };

  const unSeletedItems = useMemo(
    () =>
      allItems.filter((item) =>
        selectedItems.length > 0
          ? !selectedItems.find(
              (selectedItem) => selectedItem[itemKey] === item[itemKey]
            )
          : true
      ),
    [selectedItems, allItems, itemKey]
  );

  return { selectedItems, unSeletedItems, swap };
};

export default useSwap;
