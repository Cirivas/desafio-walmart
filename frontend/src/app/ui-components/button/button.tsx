import React from "react";
import "./button.css";
export type ButtonProps = {
  onClick: () => void;
  label: string;
};

export function Button({ onClick, label }: ButtonProps) {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
}
