import Link from "next/link";
import { User, Briefcase, ArrowLeft } from "lucide-react";

import { Card, CardContent, CardHeader } from "../ui/card";
import RegisterForm from "./RegisterForm";
import LoginWithGitHub from "../Login/LoginWithGitHub";

const Register = ({ isUserResgister = false }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0 p-4 rounded-md ">
        <CardHeader className="text-center pb-4">
          <Link
            href="/"
            className="absolute left-4 top-4 p-2 hover:bg-blue-50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            {isUserResgister ? (
              <User className="w-8 h-8 text-white" />
            ) : (
              <Briefcase className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {isUserResgister ? "Create Account" : "Become a Provider"}
          </div>
          <div className="text-gray-600 mt-2">
            {isUserResgister
              ? "Join our care community today"
              : "Join our network of care professionals"}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <RegisterForm isUserResgister={isUserResgister} />

          <div className="text-center space-x-1">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link
              className="text-blue-600 hover:text-blue-700 font-medium"
              href={isUserResgister ? "/user/login" : "/provider/login"}
            >
              Sign in here
            </Link>
          </div>
          <div className="bg-blue-50/50 rounded-xl p-3">
            <p className="text-xs text-gray-600 text-center">
              {isUserResgister
                ? "By registering, you agree to our Terms of Service and Privacy Policy"
                : "Your application will be reviewed within 2-3 business days. You'll receive an email once approved"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
