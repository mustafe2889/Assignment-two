import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import LatestMoviesPage from "./pages/latestMoviesPage";
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import PopularMoviePage from "./pages/popularMoviesPage";
import ActorHomePage from "./pages/actorHomePage";
// import ActorPage from "./pages/actorDetailsPage";
import MovieCreditsPage from "./pages/movieCreditsPage";
import CreditsPage from "./pages/creditsPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";

export const queryClient = new QueryClient({
  
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/trending" element={<TrendingMoviesPage />} />
        <Route path="/movies/latest" element={<LatestMoviesPage />} />
        {/* <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} /> */}
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/movies/topratedmovies" element={<TopRatedMoviePage />} />
        <Route path="/movies/popularmovies" element={<PopularMoviePage />} />
        <Route path="/actors" element={<ActorHomePage />} />
        <Route path="/movieCredits/:id" element={<MovieCreditsPage/>} />
        <Route path="/credits/:id" element={<CreditsPage/>} />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route element={<ProtectedRoutes />}>
        </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/logout" element={<LoginPage />} />

        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);