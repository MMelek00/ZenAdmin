import {
  Grid
} from "@mui/material";
import { movieProps } from "./commonTypes.js";
import MovieCard from "./movieCard.js";

interface moviesListProps {
  movies: Array<movieProps>;
}
const MovieList = ({ movies }: moviesListProps) => {
  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start" mt={2}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
