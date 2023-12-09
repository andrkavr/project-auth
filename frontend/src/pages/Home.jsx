import { SignIn } from "../components/SignIn";
import { Registration } from "../components/Registration";
import { AuthenticatedContent } from "../pages/AuthenticatedContent";
import { userStore } from "../store/userStore";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// const apiEnv = import.meta.env.VITE_BACKEND_API;

export const Home = () => {
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const apiCall = async () => {
  //     await fetch(`${apiEnv}/users`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUsers(data);
  //         setLoading(!loading);
  //         if (!loading) {
  //           console.log(users);
  //         }
  //       })
  //       .catch((e) => console.error(e));
  //   };
  //   apiCall();
  //   console.log(users);
  // }, []);
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
    navigate("/signin");
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     alert("You don't have permission to see this without being logged in.");
  //     //navigate("/signin");
  //   }
  // }, []);

  return (
    // <div className="container">
    //   {isLoggedIn ? (
    //     <>
    //       {/* <Link to="/">Home</Link> */}
    //       {/* <Link to="/SignIn">Sign In</Link> */}
    //       <nav>
    //         {/* <button>Sign In</button> */}
    //         <AuthenticatedContent />
    //         {/* <SignIn /> */}
    //         <Registration />
    //         <button onClick={clickLogout}>Sign out</button>
    //       </nav>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </div>
    <div className="container">
      <Link to="/">Home</Link>
      <Link to="/SignIn">Sign In</Link>
      <nav>
        <button>Sign In</button>
        {/* <AuthenticatedContent /> */}
        <SignIn />
        <Registration />
        {isLoggedIn && <button onClick={clickLogout}>Sign out</button>}
      </nav>
    </div>
  );
};
