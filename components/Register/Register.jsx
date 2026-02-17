import Link from "next/link";
import { User, Briefcase } from "lucide-react";

import { CardContent } from "../ui/card";
import RegisterForm from "./RegisterForm";

import CardLayout from "../Common/CardLayout";

const Register = ({ isUserResgister = false }) => {
  return (
    <CardLayout
      headerIcon={
        isUserResgister ? (
          <User className="w-8 h-8 text-white" />
        ) : (
          <Briefcase className="w-8 h-8 text-white" />
        )
      }
      mainHeadingText={isUserResgister ? "Create Account" : "Become a Provider"}
      subHeadingText={
        isUserResgister
          ? "Join our care community today"
          : "Join our network of care professionals"
      }
    >
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
    </CardLayout>
  );
};

export default Register;
