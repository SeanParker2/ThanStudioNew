import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 600);
      return () => clearTimeout(fadeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-container">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="text-container">
          <span className="loading-text">Than Studio</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;