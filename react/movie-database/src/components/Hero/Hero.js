import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../ui/Button/button";
import StyledHero from "./Hero.styled";


function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(" ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
  
  
  
  useEffect(() => { getDetailMovie() }, []);

  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    console.log(response.data.results)
    return response.data.results[0];
  }

  //membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    console.log(trendingMovie.id);
    const id = trendingMovie.id;

    //fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);

    setMovie(response.data);

  }


  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href= {trailer} target="_blank" >Watch Trailer</Button>
        </div>
        <div className="hero__right">
          <img
            src = {`https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
