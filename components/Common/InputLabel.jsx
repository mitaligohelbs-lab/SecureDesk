import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InputLabel = ({
  label,
  Icon,
  placeholder,
  id,
  name,
  error,
  type,
  ...props
}) => {
  return (
    <div className="w-full space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          className={`pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 ${error && "border-red-500"}`}
          placeholder={placeholder}
          id={id}
          type={type}
          name={name}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputLabel;
