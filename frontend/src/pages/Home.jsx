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

  return (
    <div className="container">
      <h2>Welcome to our authentication project!</h2>
      <p>Please register or sign in.</p>
    </div>
  );
};
