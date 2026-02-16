"use client";

import { redirect } from "next/navigation";

const LoginWithGitHub = () => {
  return (
    <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
      Or continue with GitHub
    </button>
  );
};

export default LoginWithGitHub;
