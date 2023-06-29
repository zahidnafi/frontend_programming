// Import Halaman Home
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/popular";
import NowPlayingMovie from "./pages/movie/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layouts";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/themes/themes";
import Detail from "./pages/movie/Detail";
import { useState } from "react";
import data from "./utils/constants/data";

function App() {
  const [movies, setMovies] = useState(data);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home movies={movies}  setMovies={setMovies}/>}></Route>
          <Route path="/movie/create" element={<CreateMovie movies={movies}  setMovies={setMovies} />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now-playing" element={<NowPlayingMovie />}></Route>
          <Route path="/movie/top-rated" element={<TopRatedMovie />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>

    </>
  );
}

export default App;
