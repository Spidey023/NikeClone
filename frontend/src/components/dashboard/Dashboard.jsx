import Product from "./product";
import style from "./Dashboard.module.scss";

import { DUMMY } from "../../data/DummyData";

function DashBoard() {
  return (
    <>
      <div className={style["dashboard-container"]}>
        {DUMMY.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default DashBoard;
