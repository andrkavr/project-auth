import { SignIn } from "../components/SignIn";
import { Registration } from "../components/Registration";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <button>Sign In</button>
      {/* <SignIn /> */}
      <Registration />
    </div>
  );
};
