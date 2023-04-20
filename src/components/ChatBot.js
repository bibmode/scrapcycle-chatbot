import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const ChatBot = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed in, set the current user state to the user object
        navigate("/register");
      } else {
        setCurrentUser(user);
        console.log(user);
      }
    });
  }, []);

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <ToastContainer />

      <div className="flex items-center justify-between w-screen pt-6 px-12 rounded-lg">
        <div className="flex items-center">
          <img className="w-12 mr-4" src="/logo.png" alt="logo" />
          <h1 className="text-xl font-bold text-indigo-500">SCRAPCYCLE BOT</h1>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <h4>{currentUser && currentUser.email}</h4>
          </div>

          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={logOutUser}
          >
            Log out
          </button>
        </div>
      </div>

      <iframe
        className="h-screen w-screen"
        id="inlineFrameExample"
        title="Inline Frame Example"
        src="https://mediafiles.botpress.cloud/eb847dd9-8698-4da5-818d-4aa00edb1ff4/webchat/bot.html"
        defer
      ></iframe>
    </div>
  );
};

export default ChatBot;
