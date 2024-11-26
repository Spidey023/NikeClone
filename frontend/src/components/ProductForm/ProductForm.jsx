import { useState } from "react";
import Input from "../../ui/input/Input";
import { DUMMY } from "../../data/DummyData";

function ProductForm() {
  const [products, setProducts] = useState(DUMMY);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const fdData = Object.fromEntries(fd.entries());
    console.log(fdData);
    setProducts((prevState) => [...prevState, fdData]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="name" type="text" label="Enter name" />
        <Input name="description" type="text" label="Enter description" />
        <Input name="price" type="text" label="Enter price" />
        <Input name="stock" type="text" label="Enter stock" />
        <button>submit</button>
      </form>
    </>
  );
}

export default ProductForm;
