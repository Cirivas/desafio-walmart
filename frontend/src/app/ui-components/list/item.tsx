import React, { useCallback } from "react";

export type Item = {
  id: number;
  description: string;
  image: string;
  price: number;
  brand: string;
};

type ListItemProps<T> = {
  item: T;
  onClick: (i: T) => void;
  renderer: (i: T) => JSX.Element;
};

export function ListItem<T>({ item, onClick, renderer }: ListItemProps<T>) {
  const handleClick = useCallback(() => onClick(item), [item, onClick]);
  return <div onClick={handleClick}>{renderer(item)}</div>;
}
