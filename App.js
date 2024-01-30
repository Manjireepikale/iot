// src/App.js
import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(storedPlaylist);

    const storedIndex = JSON.parse(localStorage.getItem('currentFileIndex')) || 0;
    setCurrentFileIndex(storedIndex);
  }, []);

  const handleFileChange = (file) => {
    setPlaylist([...playlist, file]);
    localStorage.setItem('playlist', JSON.stringify([...playlist, file]));
  };

  const handlePlay = (index) => {
    setCurrentFileIndex(index);
    localStorage.setItem('currentFileIndex', JSON.stringify(index));
  };

  const handleEnded = () => {
    const nextIndex = (currentFileIndex + 1) % playlist.length;
    setCurrentFileIndex(nextIndex);
    localStorage.setItem('currentFileIndex', JSON.stringify(nextIndex));
  };

  return (
    <div>
      <FileUpload onFileChange={handleFileChange} />
      <AudioPlayer
        playlist={playlist}
        currentFile={playlist[currentFileIndex]}
        onEnded={handleEnded}
      />
      <Playlist playlist={playlist} onPlay={handlePlay} />
    </div>
  );
};

export default App;
