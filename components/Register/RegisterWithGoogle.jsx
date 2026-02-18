"use client";

import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const RegisterWithGoogle = () => {
  const { signUp, isLoaded } = useSignUp();
  if (!isLoaded) return null;

  const handleGoogleLogin = async () => {
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/success",
      });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleLogin}
      className="w-full h-12"
    >
      <Chrome />
      <span>Continue with Google</span>
    </Button>
  );
};

export default RegisterWithGoogle;
