# Assignment 2 - Web API.

Name: Mustafe Abdi Mohamoud

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 - Implemented user login, signup and authentication
 + Feature 2 - Implemented api for trending movies.
 + Feature 3 = Played with the API to get the mongoose and mongo atlas working. Got close.
 + Login Page.
 +  Signup Page.
 + Protected Routes.
 + Use of Movies-api to retrieve tmdb data.
 + get trending movies
 + get movie details
 + get movie reviews
 + add a review
 + User profile page that displays all their information including their reviews.


## Setup requirements/Installation requirements .

```
install mongo, mongoose, mongo atlas.
```
```
mongod -dbpath db
```

## API Configuration

creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

```js <Route element={<ProtectedRoutes />}>
        </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage/>}/>
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/reviews/form" element={<AddMovieReviewPage/>}/>
        </Routes>
         ```


## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

```js export const getMovies = () => {
    return fetch(
        '/api/movies',
        {headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};
```


## Independent learning (if relevant)

Experimented with the API setup to configure Mongoose and MongoDB Atlas integration. Made significant progress but fell slightly short of completion.