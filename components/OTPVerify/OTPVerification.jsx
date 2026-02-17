import { Shield } from "lucide-react";
import { CardContent } from "@/components/ui/card";

import CountDown from "./CountDown";
import CardLayout from "../Common/CardLayout";

const OTPVerification = ({ isUserResgister }) => {
  return (
    <CardLayout
      headerIcon={<Shield className="w-8 h-8 text-white" />}
      mainHeadingText="Verify Your Email"
      subHeadingText="Enter the 6-digit code sent to your email"
    >
      <CardContent className="space-y-6">
        <CountDown isUserResgister={isUserResgister} />
      </CardContent>
    </CardLayout>
  );
};

export default OTPVerification;
