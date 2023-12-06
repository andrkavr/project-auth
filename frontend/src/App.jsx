import { Router, Route } from "react-router-dom";
import { Registration } from "./components/Registration";
import { SignIn } from "./components/SignIn";
import { Authenticated } from "./components/Authenticated";

export const App = () => {
  return (
    <Router>
      <div>
        <Route path="/register" component={Registration} />

        <Route path="/signin" component={SignIn} />

        <Route path="/authenticated" />
      </div>
    </Router>
  );
};
