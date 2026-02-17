import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

const Logout = () => {
  return (
    <div className="flex justify-end pe-5">
      <SignOutButton>
        <LogOut />
      </SignOutButton>
    </div>
  );
};

export default Logout;
