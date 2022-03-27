import React, { useCallback } from "react";

export type Item = {
  id: number;
  description: string;
  image: string;
  price: number;
  brand: string;
};

type ListItemProps = {
  item: Item;
  onClick: (i: Item) => void;
};

export const ListItem = ({ item, onClick }: ListItemProps) => {
  const handleClick = useCallback(() => onClick(item), [item, onClick]);
  return <li onClick={handleClick}>item: {item.description}</li>;
};
