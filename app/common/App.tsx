import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "../core/theme.js";
import { MovieDetails, Movies } from "../routes/index.js";
import { AppToolbar } from "./AppToolbar.js";
import { ErrorBoundary } from "./ErrorBoundary.js";

export function App(): JSX.Element {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <AppToolbar />
        <Toolbar />

        <Routes>
          <Route index element={<React.Suspense children={<Movies />} />} />
          <Route path="/movieDetails/:imdbID" element={<React.Suspense children={<MovieDetails />} />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
