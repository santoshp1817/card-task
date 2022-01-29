import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import CardMovies from '../../CardMovies';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MovieDetails from '../MovieDetails';

const MovieList = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [allGenre, setAllGenre] = useState([]);
  const [listView, setListView] = useState(true);
  const [apiResArray, setApiResArray] = useState([]);
  const [initialArray, setInitialArray] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);

  async function fetchAllMovies() {
    const res = await Axios.get(
      `https://api.toppersnotes.com/api/get/mock/movies`,
      {
        headers: {
          Authorization: `Bearer ToppersnotesReactTest`,
        },
      }
    );
    const genArray = res.data.map((item) => item.genres);
    setAllGenre([...new Set(genArray.flat())]);
    setApiResArray(res.data);
    setInitialArray(res.data);
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const handleClick = (item) => {
    setClickedMovie(item);
    setListView(false);
  };

  const handleChange = (e) => {
    setSearchedMovie(e.target.value);
    const temp = [...initialArray];
    setApiResArray(
      temp.filter((item) =>
        item.title.toLowerCase().includes(searchedMovie.toLowerCase())
      )
    );
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <h1>Wookie Movies</h1>
        <div style={{ float: 'right' }}>
          <SearchIcon sx={{ marginTop: 2 }} />
          <TextField
            id='outlined-basic'
            label='Search by movie title'
            variant='outlined'
            onChange={handleChange}
            value={searchedMovie}
            name='searchedMovie'
          />
        </div>
      </div>

      <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />

      {listView ? (
        allGenre &&
        allGenre.map((item) => {
          return (
            <>
              <h1>{item}</h1>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  // alignItems: 'flex-start',
                  margin: 10,
                  padding: 10,
                }}
              >
                {apiResArray.length > 0 &&
                  apiResArray.map((val) => {
                    if (val.genres.includes(item)) {
                      return (
                        <>
                          <div
                            style={{ margin: 5 }}
                            onClick={() => handleClick(val)}
                          >
                            <CardMovies img={val.backdrop} title={val.title} />
                          </div>
                        </>
                      );
                    }
                  })}
              </div>
            </>
          );
        })
      ) : (
        <MovieDetails clickedMovie={clickedMovie} />
      )}
    </>
  );
};
export default MovieList;
