"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Mail, Lock } from "lucide-react";

import InputLabel from "../Common/InputLabel";
import CommonButton from "../Common/CommonButton";

const LoginForm = ({ isUserLogin }) => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast.success("Login successful");
        router.push("/success");
      }
    } catch (err) {
      toast.error(`${err.errors?.[0]?.message}`);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <InputLabel
        label="Email"
        placeholder="Enter your email"
        Icon={Mail}
        id="email"
        type="email"
        name="email"
        {...register("email", {
          required: "Email is required",
        })}
        error={errors?.email?.message}
      />
      <InputLabel
        placeholder="Enter your password"
        label="Password"
        Icon={Lock}
        type="password"
        id="password"
        name="password"
        {...register("password", {
          required: "Password is required",
        })}
        error={errors?.password?.message}
      />
      <div className="flex justify-between">
        <div className="flex gap-1">
          <input
            type="checkbox"
            value={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span className="text-sm">Remember Me</span>
        </div>

        <Link
          className="text-sm text-blue-600 cursor-pointer"
          href="/forgot-password"
        >
          Forgot password
        </Link>
      </div>

      <CommonButton text={isUserLogin ? "Login" : "Login as Provider"} />
    </form>
  );
};

export default LoginForm;
