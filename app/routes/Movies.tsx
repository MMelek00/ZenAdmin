import { useEffect, useState } from "react";

import { Container, TextField } from "@mui/material";
import MovieList from "../components/movieList.js";
import { usePageEffect } from "../core/page.js";

export default function Movies(): JSX.Element {
  usePageEffect({ title: "Movie List" });
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async (searchValue:string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4421b41e`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <Container sx={{ py: "10vh" }} maxWidth="md">
      <TextField
        fullWidth
        label="movie name"
        id="MovieName"
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value);
        }}
      />
      <MovieList movies={movies} />
    </Container>
  );
}
