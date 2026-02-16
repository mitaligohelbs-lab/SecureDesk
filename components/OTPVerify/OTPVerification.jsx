import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountDown from "./CountDown";

const OTPVerification = ({ isUserResgister }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0">
        <CardHeader className="text-center pb-4 relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-4 p-2 hover:bg-blue-50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>

          <CardTitle className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Verify Your Email
          </CardTitle>

          <p className="text-gray-600 mt-2">
            Enter the 6-digit code sent to your email
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <CountDown isUserResgister={isUserResgister} />
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerification;
