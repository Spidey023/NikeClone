import { Link, useParams } from "react-router-dom";
import { DUMMY } from "../../data/DummyData";

function ProductDetail() {
  const { prodId } = useParams();

  const prod = DUMMY.find((prod) => prod.id == prodId);
  console.log(prod);

  return (
    <>
      <div>
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
        <p>{prod.price}</p>
        <p>{prod.stock}</p>
        <div>
          <Link to={`/${prod.id}/edit`}>
            <button>edit</button>
          </Link>
          <button>delete</button>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
