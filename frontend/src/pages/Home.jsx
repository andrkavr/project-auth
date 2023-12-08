import { SignIn } from "../components/SignIn";
import { Registration } from "../components/Registration";
import { userStore } from "../store/userStore";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const storeHandleLogout = userStore((state) => state.handleLogout);

  const { isLoggedIn } = userStore();
  console.log("user is logged in: " + isLoggedIn);

  const navigate = useNavigate();
  // if (!isLoggedIn) {
  //   alert("You don't have to permission to view this without being logged in.");
  //   navigate("/signin");
  // }

  const clickLogout = () => {
    storeHandleLogout();
    alert("You have successfully been logged out.");
    navigate("/");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      alert("You don't have permission to see this without being logged in.");
      navigate("/signin");
    }
  }, []);

  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SignIn">Sign In</Link>
        {isLoggedIn ? (
          <>
            <button>Sign In</button>
            {/* <SignIn /> */}
            <Registration />
            <button onClick={clickLogout}>Sign out</button>
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};
