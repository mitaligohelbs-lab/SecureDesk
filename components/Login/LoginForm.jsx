"use client";
import { Mail, Lock } from "lucide-react";
import InputLabel from "../Common/InputLabel";
import CommonButton from "../Common/CommonButton";
import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = ({ isUserLogin }) => {
  const { signIn, setActive, isLoaded } = useSignIn();
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
      console.error("Clerk Error:", err.errors?.[0]?.message);
      toast.error("Error !");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
      <InputLabel
        placeholder="Enter your password"
        label="Password"
        Icon={Lock}
        id="password"
        name="password"
        {...register("password", {
          required: "Password is required",
        })}
        error={errors?.password?.message}
      />
      <div className="flex justify-between">
        <div className="flex gap-1">
          <input type="checkbox" />
          <span className="text-sm">Remember Me</span>
        </div>
        <div>
          <span className="text-sm text-blue-600">Forgot password</span>
        </div>
      </div>

      <CommonButton text={isUserLogin ? "Login" : "Login as Provider"} />
    </form>
  );
};

export default LoginForm;
