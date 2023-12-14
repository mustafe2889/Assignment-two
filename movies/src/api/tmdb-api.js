import { sortMoviesBy } from "../components/templateMovieListPage";

export const getMovies = (page = 1) => {
  if (page > 500) {
    // Return an empty object for pages beyond 0
    return Promise.resolve({ results: [], total_pages: 500 });
  }    
  return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=${sortMoviesBy}&include_adult=false&include_video=true&page=${page}`

      ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };


  export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = (page =1) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    )
    //   .then((res) => res.json())
    //   .then((json) => json.results);

    .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });

  };




export const getTrendingMovies = (page =1) => {
  if (page > 500) {
    // Return an empty object for pages beyond 0
    return Promise.resolve({ results: [], total_pages: 500 });
  }  
return fetch(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
).then( (response) => {
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();

})
.catch((error) => {
  throw error
});
};



export const getLatestMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
  .then((response) => {
    if (!response.ok) {
      return response.json().then((json) => {
        throw new Error(json.message || 'Server responded with an error');
      });
    }
    return response.json();
  })
  .catch((error) => {
    // Handle network errors and other unexpected issues
    throw new Error(error.message || 'Network error or unexpected issue occurred');
  });
};

export const getPopularMovies = (page =1) => {
  if (page > 600) {
    // Return an empty object for pages beyond 600
    return Promise.resolve({ results: [], total_pages: 600 });
  }  
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getTopRatedMovies = (page =1) => {
  if (page > 600) {
    // Return an empty object for pages beyond 600
    return Promise.resolve({ results: [], total_pages: 600 });
  }  
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getActors = (page =1) => {
  if (page > 600) {
    // Return an empty object for pages beyond 600
    return Promise.resolve({ results: [], total_pages: 600 });
  }  
  return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
      .catch((error) => {
        throw error
      });
};
export const getActor = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
      .catch((error) => {
        throw error
      });
};
export const getActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
      .catch((error) => {
        throw error
      });
};

export const getMovieCredits = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
      .catch((error) => {
        throw error
      });
      };
      export const getCredits = (args) => {
        // console.log(args)
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        return fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
            .catch((error) => {
              throw error
            });
      };