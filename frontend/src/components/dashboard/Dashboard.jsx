import Product from "./product";
import style from "./Dashboard.module.scss";

import { DUMMY } from "../../data/DummyData";
import { useState } from "react";

function DashBoard() {
  const [product, setProduct] = useState(DUMMY);
  console.log(product);

  return (
    <>
      <div className={style["dashboard-container"]}>
        {product.map((prod) => (
          <Product
            key={prod.id}
            id={prod.id}
            name={prod.name}
            category={prod.category}
            price={prod.price}
          />
        ))}
      </div>
    </>
  );
}

export default DashBoard;
