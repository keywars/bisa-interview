"use client";

import { Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UploadBannerProps {
  onChange: (file: File) => void;
  setPreview: Dispatch<SetStateAction<string>>;
  preview: string;
}

const UploadBanner = ({ onChange, setPreview, preview }: UploadBannerProps) => {
  const { getRootProps, getInputProps, open, acceptedFiles, fileRejections } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      multiple: false,
      accept: {
        "image/*": [],
      },
      onDrop: (acceptedFiles) => {
        setPreview((preview) =>
          URL.createObjectURL(acceptedFiles.at(0) as File)
        );
        onChange(acceptedFiles.at(0) as File);
      },
    });

  return (
    <div {...getRootProps()}>
      <Input {...getInputProps()} />
      <Button type="button" onClick={open} className="w-full" variant="outline">
        {preview.length !== 0 ? "Upload other image" : "Upload mage"}
      </Button>
    </div>
  );
};

export default UploadBanner;
