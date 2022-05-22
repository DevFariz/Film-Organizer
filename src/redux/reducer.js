const initialState = {
  movies: [],
  favoriteMovies: [],
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.data };
    case "ADD_MOVIE_TO_FAVOURITES":
      const favoriteFilms = [...state.favoriteMovies];
      let isSame = favoriteFilms.some((el) => {
        return el.id === action.payload.Id;
      });

      if (!isSame) {
        favoriteFilms.push({
          id: action.payload.Id,
          title: action.payload.Title,
          year: action.payload.Year,
        });
      }

      console.log(favoriteFilms, isSame);
      return { ...state, favoriteMovies: favoriteFilms };

    default:
      return state;
  }
}

export default reducer;
