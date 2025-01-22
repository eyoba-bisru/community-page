import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss"; // Import the main SCSS file
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import PostDetail from "./components/PostDetail.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
