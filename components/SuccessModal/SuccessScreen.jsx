"use client";
import { Home } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CardLayout from "../Common/CardLayout";
import { useUser } from "@clerk/nextjs";

const SuccessScreen = () => {
  const { user } = useUser();
  return (
    <CardLayout
      isDisplayAerrowIcon={false}
      headerIcon={<Home className="w-25 h-25" />}
      mainHeadingText={`Welcome back! ${user?.unsafeMetadata?.fullName || ""}`}
      subHeadingText={
        user?.unsafeMetadata?.role
          ? `Successfully logged in as a ${user?.unsafeMetadata?.role}`
          : ""
      }
      displayLogOutButton={true}
    >
      <CardContent className="space-y-6">
        <div className="text-center pb-4">
          <p className="text-gray-600 leading-relaxed">
            {
              "You can now browse and book care services from our verified providers"
            }
          </p>
        </div>

        <Button className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
          {"Go to Dashboard"}
        </Button>
      </CardContent>
    </CardLayout>
  );
};

export default SuccessScreen;
