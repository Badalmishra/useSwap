import React from "react";
import useSwap from "../use-swap/";
import ListItem from "./ListItem";

const SwapContainer = () => {
  const allItems = [
    {
      primaryKey: "1",
      icon: "😂",
    },
    {
      primaryKey: "2",
      icon: "😎",
    },
    {
      primaryKey: "3",
      icon: "🤦",
    },
    {
      primaryKey: "4",
      icon: "😱",
    },
    {
      primaryKey: "5",
      icon: "🤷",
    },
    {
      primaryKey: "6",
      icon: "😢",
    },
    {
      primaryKey: "7",
      icon: "🤔",
    },
  ];
  const { selectedItems, unSeletedItems, swap } = useSwap(allItems,allItems.slice(0,2));
  return (
    <div className={"container"}>
      <div className="list">
        <small>All ( Toggle )</small>
        <hr/>
        {allItems.map((e) => (
          <ListItem  title='Click to toggle swap' key={e.primaryKey} swap={swap} item={e} />
        ))}
      </div>
      <div className="list">
        <small>Un Selected ( + select)</small>
        <hr/>
        {unSeletedItems.map((e) => (
          <ListItem title='Click to select' key={e.primaryKey} swap={swap} item={e} />
        ))}
      </div>
      <div className="list">
        <small>Selected ( - unselect)</small>
        <hr/>
        {selectedItems.map((e) => (
          <ListItem title='click to unselect' key={e.primaryKey} swap={swap} item={e} />
        ))}
      </div>
    </div>
  );
};

export default SwapContainer;
