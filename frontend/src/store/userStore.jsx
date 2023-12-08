import { create } from "zustand";
const apiEnv = import.meta.env.BACKEND_API || "http://localhost:8080";
//Only works on localhost for the moment

export const userStore = create((set, get) => ({
  username: "",
  setUsername: (username) => set({ username }),
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  accessToken: null, // Add this if you plan to store the access token
  setAccessToken: (token) => set({ accessToken: token }),
  isLoggedIn: false, // Added to track if the user is logged in
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  // FUNCTION TO REGISTER USERS
  handleSignup: async (username, password, email) => {
    if (!username || !password || !email) {
      alert("Please enter username, email and password");
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
        // Redirect or update UI
        alert("Signup successful!");
        console.log("Signing up with:", username);
      } else {
        // Display error message from server
        alert(data.response || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  },

  // LOGIN
  handleLogin: async (email, password) => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch(`${apiEnv}/signin`, {
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
        }); // Update the state with username and accessToken
        // Redirect or update UI
        localStorage.setItem("accessToken", data.response.accessToken);
        alert("Login successful!");
        console.log("Logging in with:", email, password);
      } else {
        // Display error message from server
        alert(data.response || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  },
  handleLogout: () => {
    // Clear user information and set isLoggedIn to false
    set({ username: "", email: "", accessToken: null, isLoggedIn: false });
    localStorage.removeItem("accessToken");
    // Additional logout logic if needed
  },
}));

//#region Erroneous code
// import create from "zustand";
// const apiEnv = import.meta.env.BACKEND_API;
// console.log(apiEnv);
// const url = "http://localhost:8080";

// export const userStore = create(set, get) => ({
//   username: "",
//   setUsername: (username) => set({ username }),
//   email: "",
//   setEmail: (email) => set({ email }),
//   password: "",
//   setPassword: (password) => set({ password }),
//   accessToken: null,
//   setAccessToken: (token) => set({ accessToken: token }),
//   isLoggedIn: false,
//   setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

//   // USER REGISTRATION
//   handleSignup: async (email, username, password) => {
//     if (!email || !username || !password) {
//       alert("Please fill out all the fields to register an account.");
//       return;
//     }
//     try {
//       const response = await fetch(`${apiEnv}/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, username, password }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         set({ username });
//         alert("User registration successful!");
//       } else {
//         // SERVER ERROR MESSAGE
//         alert(data.response || "Registration failed");
//       }
//     } catch (error) {
//       console.log("Registration error: " + error);
//       alert("An error occurred during registration");
//     }
//   },

//   // LOGIN
//   handleLogin: async (email, password) => {
//     if (!email || !password) {
//       alert("Please enter both your email and password.");
//       return;
//     }
//     try {
//       const response = await fetch(`${url}/signin`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         set({
//           email,
//           accessToken: data.response.accessToken,
//           isLoggedIn: true,
//         });
//         // Update state with email and accessToken
//         // Redirect or update UI
//         localStorage.setItem("accessToken", data.response.accessToken);
//         alert("Login successful!");
//       } else {
//         // SERVER ERROR MESSAGE
//         alert(data.response || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error: " + error);
//       alert("An error occurred during login");
//     }
//   },
//   handleLogout: () => {
//     // Clear userinfo and set isLoggedIn to false
//     set({ username: "", email: "", isLoggedIn: false });
//     localStorage.removeItem("accessToken");
//   },
// });

//#endregion
