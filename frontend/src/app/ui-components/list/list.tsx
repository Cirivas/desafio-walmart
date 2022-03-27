import React, { useCallback } from "react";
import { Item, ListItem } from "./item";

type ListProps = {
  itemList: Item[];
  onClick: (i: Item) => void;
};

export const List = ({ itemList, onClick }: ListProps) => {
  const handleClick = useCallback((item: Item) => onClick(item), [onClick]);

  return (
    <ul>
      {itemList.map((item) => (
        <ListItem
          key={`${item.id}-${item.brand}-${item.price}`}
          item={item}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};
