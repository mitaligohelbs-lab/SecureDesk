import {
  User,
  Briefcase,
  Mail,
  Lock,
  Phone,
  Camera,
  FileText,
  Upload,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

import InputLabel from "../Common/InputLabel";
import CommonButton from "../Common/CommonButton";
import CommonSelect from "../Common/CommonSelect";
import ProfileDocumentUpload from "../Common/ProfileDocumentUpload";

import { serviceTypes } from "../../constant/index";

const RegisterForm = ({ isUserResgister = false }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0 p-4 rounded-md ">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            {isUserResgister ? (
              <User className="w-8 h-8 text-white" />
            ) : (
              <Briefcase className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {isUserResgister ? "Create Account" : "Become a Provider"}
          </div>
          <div className="text-gray-600 mt-2">
            {isUserResgister
              ? "Join our care community today"
              : "Join our network of care professionals"}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputLabel
            label="Full Name"
            placeholder="Enter your full name"
            Icon={User}
          />
          <InputLabel
            label="Email"
            placeholder="Enter your email"
            Icon={Mail}
          />
          <InputLabel
            placeholder="Enter your password"
            label="Password"
            Icon={Lock}
          />
          <InputLabel
            placeholder="Enter your mobile number"
            label="Mobile Number"
            Icon={Phone}
          />
          {!isUserResgister && (
            <>
              <CommonSelect text="Service Type" values={serviceTypes} />
              <ProfileDocumentUpload
                label="CV Upload"
                Icon={Upload}
                accept=".pdf,.doc,.docx"
                labeltext="Click to upload your CV"
                documentSizeText="PDF, DOC, DOCX up to 10MB"
                id="cv-upload"
                htmlFor="cv-upload"
              />
              <ProfileDocumentUpload
                label="Profile Picture"
                Icon={Camera}
                accept="image/*"
                labeltext="Click to upload your photo"
                documentSizeText="JPG, PNG up to 5MB"
                id="profile-upload"
                htmlFor="profile-upload"
              />
              <ProfileDocumentUpload
                label="Official Documents"
                Icon={FileText}
                accept=".pdf,.doc,.docx,image/*"
                labeltext="Click to upload certificates/licenses"
                documentSizeText="PDF, DOC, JPG, PNG up to 10MB"
                id="documents-upload"
                htmlFor="documents-upload"
              />
            </>
          )}

          <CommonButton
            text={isUserResgister ? "register" : "Register as Provider"}
          />

          {isUserResgister && (
            <div className="w-full text-center text-blue-600 hover:text-blue-700 font-medium">
              Or continue with Google
            </div>
          )}

          <div className="text-center space-x-1">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <p className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in here
            </p>
          </div>
          <div className="bg-blue-50/50 rounded-xl p-3">
            <p className="text-xs text-gray-600 text-center">
              {isUserResgister
                ? "By registering, you agree to our Terms of Service and Privacy Policy"
                : "Your application will be reviewed within 2-3 business days. You'll receive an email once approved"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
