import Link from "next/link.js";
import { User, Briefcase } from "lucide-react";

import { CardContent } from "@/components/ui/card";

import LoginForm from "./LoginForm.jsx";
import RegisterWithGoogle from "../Register/RegisterWithGoogle.jsx";
import CardLayout from "../Common/CardLayout.jsx";

const Login = ({ isUserLogin = false }) => {
  return (
    <CardLayout
      isDisplayAerrowIcon={!isUserLogin}
      headerIcon={
        isUserLogin ? (
          <User className="w-8 h-8 text-white" />
        ) : (
          <Briefcase className="w-8 h-8 text-white" />
        )
      }
      mainHeadingText={isUserLogin ? "Welcome Back" : "Provider Login"}
      subHeadingText={
        isUserLogin
          ? "Sign in to your account"
          : "Access your care provider account"
      }
    >
      <CardContent className="space-y-4 p-0 sm:p-3">
        <LoginForm isUserLogin={isUserLogin} />
        {isUserLogin && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <RegisterWithGoogle />
          </>
        )}
        <div className="text-center space-x-1">
          <p className="text-sm text-gray-600">
            {isUserLogin
              ? "Don't have an account?"
              : "Don't have a provider account?"}
          </p>
          <Link
            className="text-blue-600 hover:text-blue-700 font-medium"
            href={isUserLogin ? "/user/register" : "/provider/register"}
          >
            {isUserLogin ? " Sign up here" : "Apply to become a provider"}
          </Link>
        </div>
        <div className="border-t border-gray-200 pt-3 text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            {isUserLogin ? (
              <Link href="/provider/login">
                {"Are you a care provider? Login here"}
              </Link>
            ) : (
              <Link href="/user/login">
                {"Looking for care services? Customer login"}
              </Link>
            )}
          </button>
        </div>
      </CardContent>
    </CardLayout>
  );
};

export default Login;
