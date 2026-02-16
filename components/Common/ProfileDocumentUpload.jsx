import { useState } from "react";
import { Label } from "../ui/label";

const ProfileDocumentUpload = ({
  label,
  Icon,
  accept,
  labeltext,
  documentSizeText,
  id,
  htmlFor,
  error,
  onFileSelect,
}) => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="border-2 border-dashed rounded-xl p-4 text-center transition-colors border-gray-200 hover:border-blue-300">
        <Icon className="w-8 h-8 mx-auto text-gray-400 mb-2" />
        <input
          id={id}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor={id} className="cursor-pointer block">
          {fileName ? (
            <p className="text-sm text-gray-600">{fileName}</p>
          ) : (
            <>
              <p className="text-sm text-gray-600">{labeltext}</p>
              <p className="text-xs text-gray-400 mt-1">{documentSizeText}</p>
            </>
          )}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ProfileDocumentUpload;
