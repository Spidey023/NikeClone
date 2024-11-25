import { Link } from "react-router-dom";
import style from "./Product.module.scss";

function Product(props) {
  return (
    <>
      <Link to={`/${props.id}`}>
        <div className={style["product-container"]}>
          <div className={style["image-container"]}>
            <img src="/nike.png" alt="" />
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
