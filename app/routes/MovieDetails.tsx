import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieProps } from "../components/commonTypes.js";
export default function MovieDetails(): JSX.Element {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState<movieProps | null>(null);

  const getMovieDetails = async () => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=4421b41e`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovieDetails(responseJson);
    }
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imdbID]);
  console.log("movieDetails", movieDetails);
  const genre = movieDetails?.Genre?.split(",");
console.log("dsd",movieDetails)
  return (
    <Container sx={{ py: "10vh" }} maxWidth="md">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          image={movieDetails?.Poster}
          title={movieDetails?.Title}
          component="img"
          loading="lazy"
          src={`${movieDetails?.Poster}`}
          sx={{ width: 200, height: "100%", objectFit: "contain" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container spacing={6}>
              <Grid item direction={"column"}>
                <Typography component="div" variant="h4">
                  {movieDetails?.Title}
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                  {movieDetails?.Year}. {movieDetails?.Rated}.{" "}
                  {movieDetails?.Runtime}
                </Typography>
              </Grid>
              <Grid item xs={2} />
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  IMDB RATING
                </Typography>
                <Typography component="div" variant="h5">
                  {movieDetails?.imdbRating}
                </Typography>
              </Grid>
            </Grid>
            <Stack direction="row" spacing={1} mt={2}>
              {genre?.map((value) => (
                <Chip
                  size="small"
                  key={value}
                  label={value}
                  variant="outlined"
                />
              ))}
            </Stack>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              mt={2}
              mb={2}
            >
              {movieDetails?.Plot}
            </Typography>
            <Divider />
            <Typography component="div" variant="body2" mt={2} mb={2}>
              Director: {movieDetails?.Director}
            </Typography>
            <Divider />
            {movieDetails?.writers && (
              <>
                <Typography component="div" variant="body2" mt={2} mb={2}>
                  Writers: {movieDetails?.writers}
                </Typography>
                <Divider />
              </>
            )}

            <Typography component="div" variant="body2" mt={2} mb={2}>
              Cast: {movieDetails?.Actors}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}
