import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Register from "./components/Register";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ChatBot from "./components/ChatBot";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWRzi3Px0PXaXI4wxUN3Epki0Ru-3jmOA",
  authDomain: "chatbot-ite18.firebaseapp.com",
  projectId: "chatbot-ite18",
  storageBucket: "chatbot-ite18.appspot.com",
  messagingSenderId: "373417306335",
  appId: "1:373417306335:web:4b0d5c81626a7b7da6616a",
  measurementId: "G-B6DGP29L6P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <ChatBot /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
