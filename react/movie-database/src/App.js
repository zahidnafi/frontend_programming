// Import Halaman Home
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/popular";
import NowPlayingMovie from "./pages/movie/now";
import TopRatedMovie from "./pages/movie/top";
import Layout from "./Layouts";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/themes/themes";


function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
          <Route path="/movie/top" element={<TopRatedMovie />}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>

    </>
  );
}

export default App;
