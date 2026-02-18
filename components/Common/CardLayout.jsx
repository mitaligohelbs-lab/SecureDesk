import Link from "next/link";

import { Card, CardHeader } from "@/components/ui/card";

import { ArrowLeft } from "lucide-react";
import Logout from "./Logout";

const CardLayout = ({
  isDisplayAerrowIcon = true,
  iconBackLink = "",
  headerIcon = "",
  mainHeadingText = "",
  subHeadingText = "",
  children,
  displayLogOutButton = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 p-2 md:p-2">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0 p-4 rounded-md gap-1">
        <CardHeader className="text-center pb-4">
          {isDisplayAerrowIcon && (
            <Link
              href={iconBackLink ? iconBackLink : "/"}
              className="absolute left-4 top-4 p-2 hover:bg-blue-50 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          )}
          {displayLogOutButton && (
            <div className="absolute right-4 top-4 p-2 hover:bg-blue-50 rounded-full">
              <Logout />
            </div>
          )}
          {headerIcon && (
            <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              {headerIcon}
            </div>
          )}
          {mainHeadingText && (
            <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {mainHeadingText}
            </div>
          )}
          {subHeadingText && (
            <div className="text-gray-600 mt-2">{subHeadingText}</div>
          )}
        </CardHeader>
        {children}
      </Card>
    </div>
  );
};

export default CardLayout;
