import Link from "next/link.js";
import { Chrome, User, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import LoginForm from "./LoginForm.jsx";
import RegisterWithGoogle from "../Register/RegisterWithGoogle.jsx";

const Login = ({ isUserLogin = false }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0 p-4 rounded-md ">
        <CardHeader className="text-center pb-4">
          {!isUserLogin && (
            <Link
              href="/"
              className="absolute left-4 top-4 p-2 hover:bg-blue-50 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          )}
          <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            {isUserLogin ? (
              <User className="w-8 h-8 text-white" />
            ) : (
              <Briefcase className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {isUserLogin ? "Welcome Back" : "Provider Login"}
          </div>
          <div className="text-gray-600 mt-2">
            {isUserLogin
              ? "Sign in to your account"
              : "Access your care provider account"}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
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
      </Card>
    </div>
  );
};

export default Login;
