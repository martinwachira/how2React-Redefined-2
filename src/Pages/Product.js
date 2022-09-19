import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <ul>
        <Link to="/products/p1">Product 1</Link>
      </ul>
      <ul>
        <Link to="/products/p2">Product 2</Link>
      </ul>
      <ul>
        <Link to="/products/p3">Product 3</Link>
      </ul>
    </>
  );
};

export default Product;
