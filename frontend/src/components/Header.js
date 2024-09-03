import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 w-full bg-white shadow-md px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-blue-700 hover:text-blue-900 text-2xl font-bold">
          SIH
        </div>
      </div>
      
      {/* Model Name Section */}
      <div className="flex items-center">
        <p className="text-blue-700 hover:text-blue-900 text-3xl font-semibold">
          Protein Analysis Model
        </p>
      </div>
    </header>
  );
}

export default Header;
