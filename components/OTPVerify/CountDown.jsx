"use client";

import { useState, useEffect } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CommonButton from "../Common/CommonButton";

const CountDown = ({ isReset = false, data }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const { signUp, isLoaded, setActive } = useSignUp();
  const { signIn } = useSignIn();
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

  const handleSend = async () => {
    if (!isLoaded) return;
    try {
      await signIn.prepareFirstFactor({
        strategy: "reset_password_email_code",
      });
      setTimeLeft(60);
      toast.success("OTP resent successfully!");
    } catch (error) {
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
      if (isReset) {
        if (data && isReset) {
          const res = await signIn?.attemptFirstFactor({
            strategy: "reset_password_email_code",
            code: otp,
            password: data.newpassword,
          });

          if (res.status === "complete") {
            await setActive({ session: res.createdSessionId });
            router.push("/success");
          }

          if (res.status === "complete") {
            toast.success("Password change successfully");
          }
        }
      } else {
        const result = await signUp.attemptEmailAddressVerification({
          code: otp,
        });

        if (result.status === "complete") {
          await setActive({
            session: result.createdSessionId,
          });
          toast.success("Email verified successfully!");
          router.push("/success");
        }
      }
    } catch (e) {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {isReset && (
        <p className="text-gray-600 mt-2">
          Enter the 6-digit code sent to your email
        </p>
      )}
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
      {!isReset && (
        <Button
          onClick={handleVerify}
          disabled={!isLoaded || otp.length !== 6}
          className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl mt-3"
        >
          Verify
        </Button>
      )}
      <div className="text-center space-y-2 cursor-pointer">
        {timeLeft > 0 ? (
          <p className="text-sm text-gray-500">
            Resend code in {formatTime(timeLeft)}
          </p>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={isReset ? handleSend : handleResend}
            className="text-blue-600 hover:text-blue-700"
          >
            Resend OTP
          </Button>
        )}
        {isReset && <CommonButton text="Reset" onClick={handleVerify} />}
      </div>
    </div>
  );
};

export default CountDown;
