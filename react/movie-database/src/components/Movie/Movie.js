import StyledMovie from "./Movie.styled"
import { Link } from "react-router-dom";
function Movie(props) {
    const {movie} = props;

    return (
        <StyledMovie>
            <img
              src={movie.poster||
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            />
            <Link to={`/movie/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
            <p>{movie.year || movie.release_date}</p>
            <p>{movie.type}</p>
        </StyledMovie>
    );
}

export default Movie;

