import React from "react";
import { PriceContext, ItemContext } from "../../App.js";
function ComponentZ() {
  return (
    <div>
      <PriceContext.Consumer>
        {(price) => {
          return (
            <ItemContext.Consumer>
              {(item) => {
                return (
                  <h2>
                 {`Price Contest : ${price}
                 AND item Contest : ${item}`}
                  </h2>
                );
              }}
            </ItemContext.Consumer>
          );
        }}
      </PriceContext.Consumer>
    </div>
  );
}

export default ComponentZ;
