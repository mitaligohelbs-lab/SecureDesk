"use client";

import { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("user-login");

  const MenuItem = () => {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 space-y-2 border">
          <h3 className="text-gray-800 font-medium text-sm">Demo Navigation</h3>
          <div className="flex flex-col gap-2">
            <button
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
              onClick={() => setCurrentScreen("user-login")}
            >
              User Login
            </button>
            <button
              className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
              onClick={() => setCurrentScreen("provider-login")}
            >
              Provider Login
            </button>
            <button
              className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors"
              onClick={() => setCurrentScreen("user-register")}
            >
              Customer Register
            </button>
            <button
              className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors"
              onClick={() => setCurrentScreen("provider-register")}
            >
              Provider Register
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentScreen) {
      case "user-login":
        return <LoginForm isUserLogin={true} />;
      case "provider-login":
        return <LoginForm />;
      case "user-register":
        return <RegisterForm isUserResgister={true} />;
      case "provider-register":
        return <RegisterForm />;
    }
  };
  return (
    <div>
      {renderContent()}
      <MenuItem />
    </div>
  );
}
