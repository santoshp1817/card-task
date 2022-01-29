import React from 'react';
import CardMovies from '../../CardMovies';
import { Grid } from '@mui/material';
import { StarIcon, StarOutlineIcon } from '@mui/icons-material/';
const MovieDetails = ({ clickedMovie }) => {
  const ratingVal = clickedMovie.imdb_rating / 2;
  return (
    <>
      <Grid container style={{ margin: 20 }}>
        <Grid item xs={3}>
          <img
            src={clickedMovie?.backdrop}
            alt='movie image'
            width='300'
            height='300'
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: 'inline' }}>
            <span> {clickedMovie?.title}(rating)</span>

            <span style={{ float: 'right' }}>icon</span>
          </div>

          <p>
            {new Date(clickedMovie?.released_on).toLocaleDateString()} |{' '}
            {clickedMovie.length} | {clickedMovie.director}
          </p>
          <p>Cast : {clickedMovie.cast.toString()}</p>
          <p>Movie Description : {clickedMovie.overview}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetails;
