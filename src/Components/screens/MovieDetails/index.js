import React from 'react';
import { Button, Grid } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
const MovieDetails = ({ clickedMovie, handleCallback }) => {
  const ratingVal = clickedMovie.imdb_rating / 2;
  console.log('rating', ratingVal);

  const handleClick = () => {
    handleCallback(true);
  };
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
            <span style={{ float: 'right' }}>
              {Array.apply(null, { length: ~~ratingVal }).map(() => (
                <StarIcon />
              ))}
              {ratingVal % 1 === 0 ? null : <StarOutlineIcon />}
            </span>
          </div>

          <p>
            {new Date(clickedMovie?.released_on).toLocaleDateString()} |{' '}
            {clickedMovie.length} | {clickedMovie.director}
          </p>
          <p>Cast : {clickedMovie.cast.toString()}</p>
          <p>Movie Description : {clickedMovie.overview}</p>
        </Grid>
      </Grid>

      <Button style={{ margin: 20 }} onClick={handleClick}>
        Go Back
      </Button>
    </>
  );
};

export default MovieDetails;
