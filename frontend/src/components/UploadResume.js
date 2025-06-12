import React, { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const UploadResume = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    const formData = new FormData();
    formData.append("resume", file);
    setUploading(true);
    try {
      const res = await axios.post("http://localhost:5000/analyze", formData);
      onUploadSuccess(res.data);
    } catch (err) {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card fade-in">
      <h2 className="card-title">📄 Upload Resume (PDF/DOCX)</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />
      <button className="upload-btn" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};

export default UploadResume;
