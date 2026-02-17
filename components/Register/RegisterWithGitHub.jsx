"use client";
import { useSignIn } from "@clerk/nextjs";

const RegisterWithGitHub = () => {
  const { signIn } = useSignIn();

  const handleGitHubLogin = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_callback",
      redirectUrl: "/success",
    });
  };
  return (
    <button
      className="w-full text-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
      onClick={handleGitHubLogin}
    >
      Or continue with GitHub
    </button>
  );
};

export default RegisterWithGitHub;
