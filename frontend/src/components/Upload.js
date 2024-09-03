import React, { useState } from 'react';

const Upload = ({ onPic }) => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.text);
        onPic(data.text); // Pass the result to the parent component
      } else {
        console.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Upload File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {file && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Uploaded Image:</h3>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            className="w-full h-auto max-h-64 object-cover rounded-lg mb-4"
          />
          {result && (
            <>
              <h3 className="text-lg font-medium mb-2">Result after Processing:</h3>
              <p className="text-gray-700 mb-4">{result}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
