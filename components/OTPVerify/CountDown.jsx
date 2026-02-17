"use client";

import { useState, useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const CountDown = ({ isUserResgister }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const { signUp, isLoaded } = useSignUp();
  const router = useRouter();
  const handleResend = async () => {
    if (!isLoaded) return;

    try {
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setTimeLeft(60);
      toast.success("OTP resent successfully!");
    } catch (err) {
      toast.error("Failed to resend OTP");
    }
  };

  // Countdown timer
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVerify = async () => {
    if (!isLoaded) return;

    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits");
      return;
    }

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: otp,
      });

      if (result.status === "complete") {
        toast.success("Email verified successfully!");
        router.push(isUserResgister ? "/user/login" : "/provider/login");
      }
    } catch (e) {
      setError("Invalid OTP. Please try again.");
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <div className="mb-2 flex justify-center items-center">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(value) => {
            setOtp(value);
            setError("");
          }}
        >
          <InputOTPGroup className="gap-2">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <Button
        onClick={handleVerify}
        disabled={!isLoaded || otp.length !== 6}
        className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl mt-3"
      >
        Verify
      </Button>

      <div className="text-center space-y-2 cursor-pointer">
        {timeLeft > 0 ? (
          <p className="text-sm text-gray-500">
            Resend code in {formatTime(timeLeft)}
          </p>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResend}
            className="text-blue-600 hover:text-blue-700"
          >
            Resend OTP
          </Button>
        )}
      </div>
    </div>
  );
};

export default CountDown;
