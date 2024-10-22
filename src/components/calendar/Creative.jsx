import React from 'react';

const UploadButton = ({ onUpload }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onUpload(file.name); // Call the callback function with the file name
        }
    };

    return (
        <button className="upload-button-container button-accent-2-light">
            <input
                type="file"
                id="upload"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="upload" className="upload-button cursor-pointer">
                Upload
            </label>
        </button>
    );
};

export default UploadButton;
