import React from "react";
import "./img.css";

export function Img({ url }: { url: string }) {
  return <img src={`http://${url}`} />;
}
