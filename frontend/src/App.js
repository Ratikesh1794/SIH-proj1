import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Upload from './components/Upload';

function App() {
  const [pic, setPic] = useState(null); // State to hold the result from the Upload component

  return (
    <div className="flex flex-col bg-slate-100 min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col items-center justify-center p-4">
        <main className="flex-1 w-full max-w-3xl">
          <Upload onPic={setPic} />
        </main>
        {pic && (
          <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-full max-w-3xl">
            <h3 className="text-lg font-medium mb-2">Result:</h3>
            <p className="text-gray-700">{pic}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
