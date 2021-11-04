import React from "react";
import useSwap from "../use-swap";
import ListItem from "./ListItem";

const SwapContainer = () => {
  const allItems = [
    {
      ID: "1",
      icon: "😂"
    },
    {
      ID: "2",
      icon: "😎"
    },
    {
      ID: "3",
      icon: "🤦"
    },
    {
      ID: "4",
      icon: "😱"
    },
    {
      ID: "5",
      icon: "🤷"
    },
    {
      ID: "6",
      icon: "😢"
    },
    {
      ID: "7",
      icon: "🤔"
    }
  ];
  const { selectedItems, unSeletedItems, swap } = useSwap(
    allItems,
    allItems.slice(0, 2),
    "ID"
  );
  return (
    <div className={"container"}>
      <div className="list">
        <small>All ( Toggle )</small>
        <hr />
        {allItems.map((e) => (
          <ListItem
            title="Click to toggle swap"
            key={e.ID}
            primaryKey="ID"
            swap={swap}
            item={e}
          />
        ))}
      </div>
      <div className="list">
        <small>Un Selected ( + select)</small>
        <hr />
        {unSeletedItems.map((e) => (
          <ListItem
            title="Click to select"
            key={e.ID}
            primaryKey="ID"
            swap={swap}
            item={e}
          />
        ))}
      </div>
      <div className="list">
        <small>Selected ( - unselect)</small>
        <hr />
        {selectedItems.map((e) => (
          <ListItem
            title="click to unselect"
            key={e.ID}
            primaryKey="ID"
            swap={swap}
            item={e}
          />
        ))}
      </div>
    </div>
  );
};

export default SwapContainer;
