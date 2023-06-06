import { useState, useEffect } from "react";
import Button from "../ui/Button/button";
import StyledHero from "./Hero.styled";
function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(function () {
    // lakukan fetch disini

    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, []);


  return (
    <StyledHero>
     <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button md>Watch</Button>
        </div>
        <div className="hero__right">
          <img
            src={movie.Poster}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
