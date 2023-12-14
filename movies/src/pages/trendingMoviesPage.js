import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';
const TrendingMoviesPage = (props) => {

  const [page, setPage] = useState(1); 

  const { data, error, isLoading, isError } = useQuery(['discoverTrending', page], () => getTrendingMovies(page), {
    keepPreviousData: true,
  });
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalPages = Math.min(data.total_pages, 500); // Limit totalPages to 30
  const handlePageChange = (event, value) => {
    setPage(value); // Set new page number
  };
  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <>
      <PageTemplate
        title="Trending Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
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
export default TrendingMoviesPage;