import React from 'react';

const downloadAllFiles = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const downloadUrl = 'https://github.com/Ellis-Brown/iceprog/archive/refs/heads/main/MacOS_Intel/FlashBinToFPGA.app';
  window.location.href = downloadUrl;
};

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Choose your platform</h1>
      <div className="grid grid-cols-3 gap-4">
        <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Ellis-Brown/iceprog/tree/main/MacOS_Intel/FlashBinToFPGA.app" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
        Mac Intel
        </a>
        <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Ellis-Brown/iceprog/tree/main/MacOS_Arm/FlashBinToFPGA.app" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Mac Arm (M series)
        </a>
        <a href="_blank" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={downloadAllFiles}>
          Windows
        </a>
      </div>
    </div>
  );
};

export default IndexPage;
