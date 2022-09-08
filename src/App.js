import { Route, Router } from "react-router-dom";

import About from "./Pages/About";
import Button from "./Components/Common/Button.js";
import MainHeader from "./Components/MainHeader";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <Button label="Register"></Button>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
