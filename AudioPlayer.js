// src/components/AudioPlayer.js
import React, { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ playlist, currentFile, onEnded }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (currentFile) {
      audioRef.current.src = URL.createObjectURL(currentFile);
      audioRef.current.play();
    }
  }, [currentFile]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    if (onEnded) {
      onEnded();
    }
  };

  return (
    <div>
      <audio ref={audioRef} controls onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
      <p>Current Time: {currentTime.toFixed(2)} seconds</p>
    </div>
  );
};

export default AudioPlayer;
