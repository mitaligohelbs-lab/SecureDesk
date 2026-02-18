"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock } from "lucide-react";

import CountDown from "../OTPVerify/CountDown";

import InputLabel from "../Common/InputLabel";
import CardLayout from "../Common/CardLayout";

import { CardContent } from "@/components/ui/card";

const ForgotOTPVerify = () => {
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <CardLayout
      iconBackLink={"/forgot-password"}
      headerIcon={<Lock className="w-8 h-8 text-white" />}
      subHeadingText="Enter your new password & code to reset it!"
    >
      <CardContent className="p-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel
            placeholder="Enter your new password"
            label="New Password"
            Icon={Lock}
            id="newpassword"
            name="newpassword"
            {...register("newpassword", {
              required: "New Password field is required",
              pattern: {
                value: /^.{8,}$/,
                message: "New Password must be at least 8 characters",
              },
            })}
            error={errors?.newpassword?.message}
          />
          <CountDown isReset={true} data={data} setData={setData} />
        </form>
      </CardContent>
    </CardLayout>
  );
};

export default ForgotOTPVerify;
