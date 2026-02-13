import { Mail, Lock, Chrome, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import InputLabel from "../Common/InputLabel.jsx";
import CommonButton from "../Common/CommonButton.jsx";

const LoginForm = ({ isUserLogin = false }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0 p-4 rounded-md ">
        <CardHeader className="text-center pb-4">
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
          <InputLabel
            label="Email"
            placeholder="Enter your email"
            Icon={Mail}
          />
          <InputLabel
            placeholder="Enter your password"
            label="Password"
            Icon={Lock}
          />
          <div className="flex justify-between">
            <div className="flex gap-1">
              <input type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </div>
            <div>
              <span className="text-sm text-blue-600">Forgot password</span>
            </div>
          </div>

          <CommonButton text={isUserLogin ? "Login" : "Login as Provider"} />

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

              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-200 transition-all h-12 hover:border-blue-300 hover:bg-blue-50/50 duration-200"
              >
                <Chrome />
                <span>Continue with Google</span>
              </Button>
            </>
          )}

          <div className="text-center space-x-1">
            <p className="text-sm text-gray-600">
              {isUserLogin
                ? "Don't have an account?"
                : "Don't have a provider account?"}
            </p>
            <p className="text-blue-600 hover:text-blue-700 font-medium">
              {isUserLogin ? " Sign up here" : "Apply to become a provider"}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-3 text-center">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              {isUserLogin
                ? " Are you a care provider? Login here"
                : "Looking for care services? Customer login"}
            </button>
          </div>

          <div className="bg-blue-50/50 rounded-xl p-3">
            <p className="text-xs text-gray-600 text-center">
              Demo: Use any email/password or try{" "}
              <span className="font-mono">
                {isUserLogin ? " wrong@email.com" : "pending@provider.com"}
              </span>{" "}
              {isUserLogin
                ? " to see error handling"
                : " for pending approval, or wrong@provider.com for login error"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
