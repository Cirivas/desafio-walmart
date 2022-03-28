import React, { useCallback } from "react";
import { Item, ListItem } from "./item";
import "./list.css";

type ListProps = {
  itemList: Item[];
  onClickMore?: (i: Item) => void;
  onClickLess?: (i: Item) => void;
  keyExtractor: (i: Item) => string;
};

export function List({
  itemList,
  onClickLess,
  onClickMore,
  keyExtractor,
}: ListProps) {
  const extractKey = useCallback(
    (item: Item) => keyExtractor(item),
    [keyExtractor]
  );
  return (
    <div className="list-container">
      {itemList.map((item) => (
        <ListItem
          key={extractKey(item)}
          item={item}
          onClickMore={onClickMore}
          onClickLess={onClickLess}
        />
      ))}
    </div>
  );
}
