import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoad: () => void;
  }

const LoadingScreen = ({ onLoad }: LoadingScreenProps) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      onLoad();
    }, 4000); 
  }, []);

  return (
    <div
      className={`fixed p-10 flex flex-col justify-center z-50 text-center align-middle transition-transform duration-500 h-screen ${
        showLoading ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}
      style={{ background: 'black', color: 'white' }}
    >
    
      <p className="text-center text-6xl font-semibold">
        "We borrow from nature, the space  ....upon which we build"
      </p>
      <p className='text-center text-amber-200 text-5xl pt-4'>-Tadao Ando</p>
    </div>
  );
};

export default LoadingScreen;
