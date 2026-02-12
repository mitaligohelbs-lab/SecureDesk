import { Mail, Lock, Chrome, User, ArrowLeft } from "lucide-react";
const UserLoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <User className="w-8 h-8 text-white" />
      </div>
      <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Welcome Back
      </div>
      <div className="text-gray-600 mt-2">Sign in to your account</div>
    </div>
  );
};

export default UserLoginForm;
