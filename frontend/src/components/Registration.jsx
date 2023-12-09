import "./Registration.css";
import { userStore } from "../store/userStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Initialize the navigate function
  const navigate = useNavigate();

  // Function to handle the click event of the signup button
  const storeHandleSignup = userStore((state) => state.handleSignup);

  // Combined function for handling the signup click event
  const onSignupClick = async () => {
    if (!username || !password || !email) {
      alert("Please enter email, username and password");
      return;
    }
    try {
      console.log(email, username, password);
      await storeHandleSignup(email, username, password);
      if (email && password) {
        // alert("Registration successful!");
        navigate("/signin"); // Replace with your desired path
      }
    } catch (error) {
      // Handle any errors that occur during signup
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="registration-form">
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="username">
          Username:{" "}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={onSignupClick} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
