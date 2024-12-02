'use client'
import { useState } from "react";
import { FileUploadProps } from "../../types/components";

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-white">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500"
      />
      <button
        onClick={handleUpload}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;

