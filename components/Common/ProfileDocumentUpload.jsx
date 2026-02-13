import { Label } from "../ui/label";

const ProfileDocumentUpload = ({
  label,
  Icon,
  accept,
  labeltext,
  documentSizeText,
  id,
  htmlFor,
}) => (
  <div className="space-y-2 ">
    <Label htmlFor={htmlFor}>{label}</Label>
    <div className="border-2 border-dashed rounded-xl p-4 text-center transition-colors border-gray-200 hover:border-blue-300">
      <Icon className="w-8 h-8 mx-auto text-gray-400 mb-2" />
      <input accept={accept} type="file" className="hidden" id={id} />
      <label>
        <p className="text-sm text-gray-600">{labeltext}</p>
        <p className="text-xs text-gray-400 mt-1">{documentSizeText}</p>
      </label>
    </div>
  </div>
);

export default ProfileDocumentUpload;
