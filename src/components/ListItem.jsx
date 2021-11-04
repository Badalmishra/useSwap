import React from "react";

const ListItem = ({ item, swap, title, primaryKey }) => {
  const handleClick = () => {
    swap(item[primaryKey]);
  };
  return (
    <div onClick={handleClick} title={title} className={"listItem"}>
      {item.icon}
    </div>
  );
};

export default ListItem;
