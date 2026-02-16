"use client";

import { redirect } from "next/navigation";
import { supabaseClient } from "../../lib/supabaseClient";

const LoginWithGitHub = () => {
  const handleClick = () => {
    try {
      const { data } = supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });
      if (data) {
        redirect("/user/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="w-full text-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
      onClick={handleClick}
    >
      Or continue with GitHub
    </button>
  );
};

export default LoginWithGitHub;
