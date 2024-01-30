// src/components/Playlist.js
import React from 'react';

const Playlist = ({ playlist, onPlay }) => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((file, index) => (
          <li key={index} onClick={() => onPlay(index)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
