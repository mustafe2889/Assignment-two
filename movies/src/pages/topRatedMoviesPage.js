import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import MustWatchMovies from '../components/cardIcons/mustWatchMovies'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";
import Pagination from '@mui/material/Pagination';
import PlaylistAddIcon from '../components/cardIcons/addToFavorites';


const TopRatedMoviePage = (props) => {
    const [page, setPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery(['toprated', page], () => getTopRatedMovies(page), {
        keepPreviousData: true, 
      });
      const handlePageChange = (event, value) => {
        setPage(value); 
      };

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const movies = data.results;
  const totalPages = Math.min(data.total_pages, 600); // Limit totalPages to 600
  return (
    <>
    <PageTemplate
    title='Top Rated Movies'
      movies={movies}
      action={(movie) => <PlaylistAddIcon movie={movie} />}
    />
    {/* Pagination component */}
    <Pagination
      count={totalPages}
      page={page}
      onChange={handlePageChange}
      color="primary"
      showFirstButton
      showLastButton
      style={{ paddingBottom: '20px', paddingTop: '20px', justifyContent: 'center', display: 'flex' }}
    />
  </>
  );
};
export default TopRatedMoviePage;


