import React, { useCallback } from "react";
import { Button } from "../button/button";
import { Img } from "../img/img";
import { Money } from "../money/money";
import "./item.css";

export type Item = {
  id: number;
  description: string;
  image: string;
  price: number;
  brand: string;
};

type ListItemProps = {
  item: Item;
  onClickLess?: (i: Item) => void;
  onClickMore?: (i: Item) => void;
};

export function ListItem({ item, onClickMore, onClickLess }: ListItemProps) {
  const handleLess = useCallback(
    () => onClickLess && onClickLess(item),
    [item, onClickLess]
  );
  const handleMore = useCallback(
    () => onClickMore && onClickMore(item),
    [item, onClickMore]
  );

  return (
    <div className="item-container">
      <Img url={item.image} />
      <div className="description">
        <span>{item.description}</span>
      </div>
      <div className="brand">
        <span>{item.brand}</span>
      </div>
      <div className="details-container">
        <span className="price">
          <Money value={item.price} />
        </span>
        <div className="actions-container">
          {onClickMore && <Button onClick={handleMore} label={"Agregar"} />}
          {onClickLess && <Button onClick={handleLess} label={"Eliminar"} />}
        </div>
      </div>
    </div>
  );
}
