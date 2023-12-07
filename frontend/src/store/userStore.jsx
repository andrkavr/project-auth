import { create } from "zustand";
const apiEnv = import.meta.env.BACKEND_API;

export const userStore = (set, get) => ({
  username: "",
  setUsername: (username) => set({ username }),
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

  //USER REGISTRATION
  handleSignup: async (email, username, password) => {
    if (!email || !username || !password) {
      alert("Please fill out all the fields to register an account.");
      return;
    }
    try {
      const response = await fetch(`${apiEnv}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();
      if (data.success) {
        set({ username });
        alert("User registration successful!");
      } else {
        //SERVER ERROR MESSAGE
        alert(data.response || "Registration failed");
      }
    } catch (error) {
      console.log("Registration error: " + error);
      alert("An error occurred during registration");
    }
  },

  //LOGIN
  handleLogin: async (email, password) => {
    if (!email || !password) {
      alert("Please enter both your email and password.");
      return;
    }
    try {
      const response = await fetch(`${apiEnv}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        set({
          email,
          accessToken: data.response.accessToken,
          isLoggedIn: true,
        });
        //Update state with email and accessToken
        //Redirect or update UI
        localStorage.setItem("accessToken", data.response.accessToken);
        alert("Login successful!");
      } else {
        //SERVER ERROR MESSAGE
        alert(data.response || "Login failed");
      }
    } catch (error) {
      console.error("Login error: " + error);
      alert("An error occurred during login");
    }
  },
  handleLogout: () => {
    //Clear userinfo and set isLoggedIn to false
    set({ username: "", isLoggedIn: false });
    localStorage.removeItem("accessToken");
  },
});
