// src/components/FileUpload.js
import React from 'react';

const FileUpload = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div>
      <label htmlFor="audioFile">Upload Audio File:</label>
      <input type="file" id="audioFile" accept=".mp3" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
