import React, { useContext } from "react";
import ComponentZ from "./ComponentZ.js";
import { PriceContext, ItemContext } from "../../App.js";

function ComponentY() {
  const price = useContext(PriceContext);
  const item = useContext(ItemContext);
  return (
    <div>
      <ComponentZ />
      {price} - {item}
    </div>
  )
}

export default ComponentY;
