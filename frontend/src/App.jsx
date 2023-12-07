import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { SignIn } from "./components/SignIn";
import { AuthenticatedContent } from "./pages/AuthenticatedContent";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/authenticated" element={<AuthenticatedContent />} />
      </Routes>
    </BrowserRouter>
  );
};
