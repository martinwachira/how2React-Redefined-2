import CartContext from "./cart-contex";

const CartProvider = (props) => {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
