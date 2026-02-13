import { Mail, Lock } from "lucide-react";
import InputLabel from "../Common/InputLabel";
import CommonButton from "../Common/CommonButton";

const LoginForm = ({ isUserLogin }) => {
  return (
    <div className="space-y-4">
      <InputLabel label="Email" placeholder="Enter your email" Icon={Mail} />
      <InputLabel
        placeholder="Enter your password"
        label="Password"
        Icon={Lock}
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
    </div>
  );
};

export default LoginForm;
