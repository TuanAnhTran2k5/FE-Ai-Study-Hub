import { FileUp, UploadCloud } from 'lucide-react';
import type { RefObject } from 'react';

import { Button } from '@/components/ui/button';

type UploadDropzoneProps = {
  error: string;
  fileInputRef: RefObject<HTMLInputElement | null>;
  selectedFile: File | null;
  onFileChange: (file: File | undefined) => void;
};

export function UploadDropzone({
  error,
  fileInputRef,
  selectedFile,
  onFileChange,
}: UploadDropzoneProps) {
  return (
    <section className="dropzone">
      <input
        ref={fileInputRef}
        className="sr-only"
        type="file"
        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
        onChange={(event) => onFileChange(event.target.files?.[0])}
      />
      <div className="dropzone-icon">
        <FileUp size={58} />
        <span>
          <UploadCloud size={28} />
        </span>
      </div>
      <h2>Drag & drop your file here</h2>
      <p>or click to browse from your device</p>
      <Button type="button" onClick={() => fileInputRef.current?.click()}>
        <UploadCloud size={18} />
        Choose File
      </Button>
      {selectedFile ? (
        <strong className="selected-file">
          Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
        </strong>
      ) : null}
      {error ? <strong className="upload-error">{error}</strong> : null}
      <small>Supported formats: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, TXT</small>
      <small>Maximum file size: 50MB</small>
    </section>
  );
}
