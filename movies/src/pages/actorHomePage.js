import React, {useEffect, useState} from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const HomePage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(['discover', page], () => getActors(page));
    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const actors = data.results;
    const handlePageChange = (event, value) => {
        setPage(value);
      };
    const totalPages = Math.min(data.total_pages, 600); // Limit totalPages to 600
    return (

     <>
      <PageTemplate
            title="Actors Page"
            actors={actors}
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