export const getMoviesStart = () => ({
    type : "GET_MOVIE_START",
});
export const getMoviesSuccess  = (movies) => ({
    type : "GET_MOVIE_SUCCESS",
    payload : movies
});
export const getMoviesFailure  = () => ({
    type : "GET_MOVIE_FAILURE",
});
