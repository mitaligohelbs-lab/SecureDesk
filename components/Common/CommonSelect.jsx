import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { Label } from "../ui/label";

const CommonSelect = ({ text, values }) => {
  return (
    <div className="w-full space-y-2">
      <Label>{text}</Label>
      <Select>
        <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-blue-400 ">
          <SelectValue placeholder="Select your service type" />
        </SelectTrigger>

        <SelectContent>
          {values.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CommonSelect;
