import React, { useCallback } from "react";
import { ListItem } from "./item";

type ListProps<T> = {
  itemList: T[];
  onClick: (i: T) => void;
  renderer: (i: T) => JSX.Element;
  keyExtractor: (i: T) => string;
};

export function List<T>({
  itemList,
  onClick,
  renderer,
  keyExtractor,
}: ListProps<T>) {
  const handleClick = useCallback((item: T) => onClick(item), [onClick]);
  const extractKey = useCallback(
    (item: T) => keyExtractor(item),
    [keyExtractor]
  );
  return (
    <ul>
      {itemList.map((item) => (
        <ListItem
          key={extractKey(item)}
          item={item}
          onClick={handleClick}
          renderer={renderer}
        />
      ))}
    </ul>
  );
}
