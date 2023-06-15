import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import {nanoid} from "nanoid"

function Movies(props) {
  const {title,movies, setMovies} =  props;

  function handleClick(){
   const newFilm = {
    id: nanoid(10),
    title: "Jigsaw",
    year: 2020, 
    type: "movie",
    poster: "https://picsum.photos/300/400",
   };

  setMovies([...movies, newFilm]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map(function(movie) {
            return <Movie key={movie.id} movie={movie}     />     
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
