import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <p> Product Page</p>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetails;
