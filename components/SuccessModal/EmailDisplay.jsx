"use client";

import { useUser } from "@clerk/nextjs";

const EmailDisplay = () => {
  const { user } = useUser();
  return (
    <p className="text-blue-600 font-medium mt-2">
      {`successfully logged in as ${user?.unsafeMetadata?.fullName}`}
    </p>
  );
};

export default EmailDisplay;
