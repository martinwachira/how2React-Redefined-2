import { Route, Switch } from "react-router-dom";

import About from "./Pages/About";
import Button from "./Components/Common/Button.js";
import MainHeader from "./Components/MainHeader";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Button label="Register"></Button> */}
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products" exact>
          <Product />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
