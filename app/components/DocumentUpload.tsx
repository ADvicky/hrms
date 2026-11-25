"use client";

import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

import {
  Upload,
  FileText,
  Trash2,
  CircleCheck,
} from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

interface DocumentUploadProps {
  title: string;
  allowedExtensions?: string[];
}

export default function DocumentUpload({
  title,
  allowedExtensions = ["pdf", "doc", "docx"],
}: DocumentUploadProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [fileError, setFileError] = useState("");

  
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    setFileError("");

    // Get file extension
    const extension = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    
    if (
      !extension ||
      !allowedExtensions.includes(extension)
    ) {
      setFileError(
        `Allowed files: ${allowedExtensions.join(", ")}`
      );

      e.target.value = "";
      return;
    }

  
    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size must not exceed 5 MB");

      e.target.value = "";
      return;
    }

    setSelectedFile(file);

    e.target.value = "";
  };


  const handleRemoveFile = () => {

    setSelectedFile(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-3 border
      border-gray-200 rounded-lg p-4 min-w-0">

      

      <h2 className="font-semibold text-sm">
        {title}
      </h2>

      

      <input
        type="file"
        ref={fileInputRef}
        accept={allowedExtensions
          .map((ext) => `.${ext}`)
          .join(",")}
        className="hidden"
        onChange={handleFileChange}
      />

      

      {selectedFile ? (

        <div className="flex items-center gap-3">

          <FileText
            size={32}
            className="text-green-700 shrink-0"
          />

          <div className="flex-1 min-w-0">

            <p className="text-sm font-medium truncate">
              {selectedFile.name}
            </p>

            <p className="text-xs text-gray-500">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>

          </div>

          <CircleCheck
            size={20}
            className="text-green-600 shrink-0"
          />

          <button
            type="button"
            aria-label={`Remove ${title}`}
            onClick={handleRemoveFile}
            className="text-red-500 cursor-pointer"
          >
            <Trash2 size={18} />
          </button>

        </div>

      ) : (

        <div className="flex flex-col items-center
          gap-2 border-2 border-dashed
          border-gray-300 rounded-lg py-5">

          <FileText
            size={32}
            className="text-gray-400"
          />

          <p className="text-sm text-gray-500">
            No file selected
          </p>

          <p className="text-xs text-gray-400 text-center">
            {allowedExtensions.join(", ").toUpperCase()}
            {" "}(Max 5 MB)
          </p>

        </div>

      )}

      

      {fileError && (
        <p className="text-red-500 text-xs">
          {fileError}
        </p>
      )}

      

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="w-full py-2 rounded-md
          bg-secondary text-white flex items-center
          justify-center gap-2 cursor-pointer"
      >

        <Upload size={16} />

        {selectedFile ? "Replace File" : "Upload File"}

      </button>

    </div>
  );
}