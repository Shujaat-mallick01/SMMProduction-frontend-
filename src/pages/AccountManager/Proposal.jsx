import React, { useState } from 'react';
import Pdf from "../../assets/Images/pdf.png";

const Proposal = () => {
  const [files, setFiles] = useState([]);
  const [fileStatus, setFileStatus] = useState({});

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleView = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  const handleEdit = () => {
    alert('Edit functionality coming soon!');
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFileStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      delete newStatus[index]; // Remove status when file is deleted
      return newStatus;
    });
  };

  const handleStatusClick = (index, status) => {
    setFileStatus((prevStatus) => ({
      ...prevStatus,
      [index]: status
    }));
  };

  return (
    <div className='section'>
      <h2 className='mb-1'>Service Proposal</h2>

      {/* Second Row with Upload Button */}
      <div className='row pxy-15 mt-1 border border-radius d-flex-space-between align-center mb-1'>
        <div className='col-md-6 align-center d-flex'>
          <img
            src={Pdf}
            alt="PDF Icon"
          />
          <span>Upload Proposal</span>
        </div>
        <div className='col-md-6 text-right gap-10 d-flex justify-end'>
          <label className='upload-button'>
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className='upload-pdf-button text-center inline-block cursor-pointer'>Upload</span>
          </label>
        </div>
      </div>

      {/* List of uploaded files */}
      {files.length > 0 && files.map((file, index) => (
        <div key={index} className='file-section'>
          {/* First Row with File and Action Buttons */}
          <div className='row pxy-15 border border-radius d-flex-space-between align-center'>
            <div className='col-md-6 align-center d-flex'>
              <img
                src={Pdf}
                alt="PDF Icon"
              />
              <span>{file.name}</span>
            </div>
            <div className='col-md-6 text-right gap-10 d-flex justify-end'>
              <button className='button-primary py-2' onClick={() => handleView(file)}>View</button>
              <button className='button-dark py-2' onClick={handleEdit}>Edit</button>
              <button className='button-danger py-2' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>

          {/* Second Row with Status Buttons */}
          <div className='row pxy-15 mt-1 mb-1 border border-radius d-flex-space-between align-center'>
            <div className='col-md-6 align-center d-flex'>
              <img
                src={Pdf}
                alt="PDF Icon"
              />
              <span>{file.name}</span>
            </div>
            <div className='col-md-6 text-right gap-10 d-flex justify-end'>
              {fileStatus[index] === 'approved' ? (
                <button className='button-secondary AM-tn'>Proposal Approved</button>
              ) : fileStatus[index] === 'changes' ? (
                <button className='button-primary AM-tn'>Changes Required</button>
              ) : fileStatus[index] === 'denied' ? (
                <button className='button-danger AM-tn'>Proposal Denied</button>
              ) : (
                <>
                  <button className='button-secondary AM-tn' onClick={() => handleStatusClick(index, 'approved')}>Proposal Approved</button>
                  <button className='button-primary AM-tn' onClick={() => handleStatusClick(index, 'changes')}>Changes Required</button>
                  <button className='button-danger AM-tn' onClick={() => handleStatusClick(index, 'denied')}>Proposal Denied</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proposal;
