import { Button } from "@/components/ui/button";

const CommonButton = ({ text }) => (
  <Button className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50">
    {text}
  </Button>
);

export default CommonButton;
