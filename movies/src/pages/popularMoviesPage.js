import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from "react-query";
import Pagination from '@mui/material/Pagination';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const PopularMoviePage = (props) => {
    const [page, setPage] = useState(1); 
    const { data, error, isLoading, isError } = useQuery(['popular', page], () => getPopularMovies(page), {
        keepPreviousData: true,
      });

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const movies = data.results;
  const totalPages = Math.min(data.total_pages, 600); // Limit totalPages to 600
  const handlePageChange = (event, value) => {
    setPage(value); // Set new page number
  };
  return (
    <>
      <PageTemplate
        title='Popular Movies'
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
export default PopularMoviePage;



