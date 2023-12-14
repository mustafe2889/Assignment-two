import React from 'react';
import IconButton from '@mui/material/IconButton';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const MustWatchMovies = ({ movie }) => {
  const handleAddToMustWatch = (id) => {
    // Logic to add movie to must-watch list
  };

  return (
    <IconButton aria-label="Add to Must Watch" onClick={() => handleAddToMustWatch(movie.id)}>
      <PlaylistAddIcon />
    </IconButton>
  );
};

export default MustWatchMovies;
