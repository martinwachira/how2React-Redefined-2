import About from "./Pages/About";
import Button from "./Components/Common/Button.js";
import MainHeader from "./Components/MainHeader";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      {/* <Button label="Register"></Button> */}
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
      <Route path="/product-details/:productId">
        <ProductDetails />
      </Route>
    </div>
  );
}

export default App;
