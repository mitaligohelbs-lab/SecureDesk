import { Lock } from "lucide-react";

import ForgotpasswordForm from "./ForgotpasswordForm";

import { CardContent } from "@/components/ui/card";
import CardLayout from "../Common/CardLayout";

const ForgotPassword = () => {
  return (
    <CardLayout
      headerIcon={<Lock className="w-8 h-8 text-white" />}
      mainHeadingText=" Forgot your password?"
      subHeadingText="Enter your email to reset it!"
    >
      <CardContent className="p-2">
        <ForgotpasswordForm />
      </CardContent>
    </CardLayout>
  );
};

export default ForgotPassword;
