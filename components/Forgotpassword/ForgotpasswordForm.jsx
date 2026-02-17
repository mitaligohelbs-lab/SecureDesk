"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import { toast } from "react-toastify";
import { useSignIn } from "@clerk/nextjs";

import InputLabel from "../Common/InputLabel";
import CommonButton from "../Common/CommonButton";

const ForgotpasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useSignIn();
  const router = useRouter();

  const onSubmit = async (data) => {
    router.push("/forgot-password/otpverify");
    try {
      const res = await signIn?.create({
        strategy: "reset_password_email_code",
        identifier: data.email,
      });
      if (res) {
        toast.success("OTP send successfully");
      } else {
        toast.error("Try Again!");
      }
    } catch (error) {
      toast.error("Try Again!");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <InputLabel
        label="Email"
        placeholder="Enter your email"
        Icon={Mail}
        id="email"
        name="email"
        {...register("email", {
          required: "Email is required",
        })}
        error={errors?.email?.message}
      />
      <CommonButton text="Send password reset code" />

      <Link href="/" className="flex gap-2 justify-center items-center">
        <ArrowLeft className="w-4 h-4" />
        Return back to login page
      </Link>
    </form>
  );
};

export default ForgotpasswordForm;
