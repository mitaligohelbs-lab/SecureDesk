import {
  User,
  Mail,
  Lock,
  Phone,
  Camera,
  FileText,
  Upload,
} from "lucide-react";

import CommonSelect from "../Common/CommonSelect";
import CommonButton from "../Common/CommonButton";
import InputLabel from "../Common/InputLabel";
import ProfileDocumentUpload from "../Common/ProfileDocumentUpload";

import { serviceTypes } from "../../constant";

const RegisterForm = ({ isUserResgister }) => {
  return (
    <div className="space-y-4">
      <InputLabel
        label="Full Name"
        placeholder="Enter your full name"
        Icon={User}
      />
      <InputLabel label="Email" placeholder="Enter your email" Icon={Mail} />
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
    </div>
  );
};

export default RegisterForm;
