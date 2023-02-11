import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { movieProps } from "./commonTypes.js";
interface IProps {
  movie: movieProps
}
const MovieCard = ({movie} :IProps) => {
  const navigate = useNavigate();
  return (
    <Card >
      <CardMedia
        component="img"
        alt={movie?.Title}
        loading="lazy"
        src={`${movie?.Poster}fit=cover`}
        sx={{height:400,objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {movie?.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> navigate(`/movieDetails/${movie.imdbID}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
