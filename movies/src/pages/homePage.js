import React, { useState , useEffect} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(['discover', page], () => getMovies(page));

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;
  const totalPages = Math.min(data.total_pages, 500); // Limit totalPages to 30

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
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

export default HomePage;
