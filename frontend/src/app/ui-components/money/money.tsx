import React from "react";
import "./money.css";

export type MoneyProps = {
  value: number;
};

export function Money({ value }: MoneyProps) {
  const toString = value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });
  return <span className="money">{`$${toString}`}</span>;
}
