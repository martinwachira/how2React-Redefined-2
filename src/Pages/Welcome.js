import { React } from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>New User!</p>
      </Route>
    </section>
  );
};

export default Welcome;
