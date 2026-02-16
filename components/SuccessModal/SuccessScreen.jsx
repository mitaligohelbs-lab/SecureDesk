import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Home } from "lucide-react";
import Link from "next/link";

import EmailDisplay from "./EmailDisplay";

const SuccessScreen = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm border-0">
        <CardHeader className="text-center pb-2">
          <Link
            href="/"
            className="absolute left-4 top-4 p-2 hover:bg-blue-50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="w-16 h-16 bg-linear-to-r from-blue-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center ">
            <Home className="w-25 h-25" />
          </div>

          <CardTitle className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {`Welcome back!`}
          </CardTitle>
          <EmailDisplay />
        </CardHeader>

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
      </Card>
    </div>
  );
};

export default SuccessScreen;
