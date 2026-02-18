"use client";

import { toast } from "react-toastify";
import { SignOutButton, useUser } from "@clerk/nextjs";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CardLayout from "../Common/CardLayout";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <CardLayout>
      <CardContent className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-2xl font-semibold">
          Welcome, {user?.fullName || "User"} 👋
        </h1>
        {user?.primaryEmailAddress?.emailAddress && (
          <p className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        )}
        {user?.unsafeMetadata?.role && (
          <p className="inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            Role: {user?.unsafeMetadata?.role}
          </p>
        )}
        <p className="text-sm text-gray-500">
          You are successfully authenticated.
        </p>

        <SignOutButton>
          <Button
            className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => toast.success("User logout successfully!")}
          >
            Logout
          </Button>
        </SignOutButton>
      </CardContent>
    </CardLayout>
  );
};

export default Dashboard;
