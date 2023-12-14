import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "../components/cardIcons/PlaylistAdd";
import Pagination from '@mui/material/Pagination';

const UpcomingMoviesPage = (props) => {
  const [page, setPage] = useState(2);
  
  const { data, error, isLoading, isError } = useQuery(['upcoming', page], () => getUpcomingMovies(page), {
    keepPreviousData: true, 
  });
  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const totalPages = data.total_pages;
  
  
  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
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
export default UpcomingMoviesPage;