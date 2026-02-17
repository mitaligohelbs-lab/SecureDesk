"use client";
import {
  User,
  Mail,
  Lock,
  Phone,
  Camera,
  FileText,
  Upload,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";

import CommonSelect from "../Common/CommonSelect";
import CommonButton from "../Common/CommonButton";
import InputLabel from "../Common/InputLabel";
import ProfileDocumentUpload from "../Common/ProfileDocumentUpload";

import { serviceTypes } from "../../constant";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterForm = ({ isUserResgister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();

  const onSubmit = async (data) => {
    if (!isLoaded) return;
    try {
      const role = isUserResgister ? "customer" : "provider";
      const result = await signUp.create({
        emailAddress: data.email,
        password: data.password,
        unsafeMetadata: {
          role,
          fullName: data.fullName,
          mobileNo: data.mobileNo,
        },
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      if (result) {
        router.push("/OTPVerification");
      }
      toast.success("OTP send successfully!");
      reset();
    } catch (err) {
      toast.error("Some error are there! Try again");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <InputLabel
        label="Full Name"
        placeholder="Enter your full name"
        Icon={User}
        id="fullName"
        name="fullName"
        {...register("fullName", {
          required: "Full name is required",
        })}
        error={errors.fullName?.message}
      />
      <InputLabel
        label="Email"
        placeholder="Enter your email"
        Icon={Mail}
        id="email"
        name="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid.",
          },
        })}
        error={errors.email?.message}
      />
      <InputLabel
        placeholder="Enter your password"
        label="Password"
        Icon={Lock}
        id="password"
        name="password"
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^.{8,}$/,
            message: "Password must be at least 8 characters",
          },
        })}
        error={errors.password?.message}
      />
      <InputLabel
        placeholder="Enter your mobile number"
        label="Mobile Number"
        Icon={Phone}
        id="mobileNo"
        name="mobileNo"
        {...register("mobileNo", {
          required: "Mobile number is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Please enter a valid 10-digit mobile number",
          },
        })}
        error={errors.mobileNo?.message}
      />
      {!isUserResgister && (
        <>
          <CommonSelect text="Service Type" values={serviceTypes} />
          <Controller
            name="CVupload"
            control={control}
            rules={{ required: "CV is required" }}
            render={({ field }) => (
              <ProfileDocumentUpload
                label="CV Upload"
                Icon={Upload}
                accept=".pdf,.doc,.docx"
                labeltext={"Click to upload your CV"}
                documentSizeText="PDF, DOC, DOCX up to 10MB"
                id="CVupload"
                htmlFor="CVupload"
                error={errors.CVupload?.message}
                onFileSelect={(file) => field.onChange(file)}
              />
            )}
          />
          <Controller
            name="profileUpload"
            control={control}
            rules={{ required: "Profile picture is required" }}
            render={({ field }) => (
              <ProfileDocumentUpload
                label="Profile Picture"
                Icon={Camera}
                accept="image/*"
                labeltext="Click to upload your photo"
                documentSizeText="JPG, PNG up to 5MB"
                id="profileUpload"
                htmlFor="profileUpload"
                error={errors.profileUpload?.message}
                onFileSelect={(file) => field.onChange(file)}
              />
            )}
          />
          <Controller
            name="documentsUpload"
            control={control}
            rules={{ required: "Official documents are required" }}
            render={({ field }) => (
              <ProfileDocumentUpload
                label="Official Documents"
                Icon={FileText}
                accept=".pdf,.doc,.docx,image/*"
                labeltext="Click to upload certificates/licenses"
                documentSizeText="PDF, DOC, JPG, PNG up to 10MB"
                id="documentsUpload"
                htmlFor="documentsUpload"
                error={errors?.documentsUpload?.message}
                onFileSelect={(file) => field.onChange(file)}
              />
            )}
          />
        </>
      )}
      <CommonButton
        text={isUserResgister ? "Register" : "Register as Provider"}
      />
    </form>
  );
};

export default RegisterForm;
