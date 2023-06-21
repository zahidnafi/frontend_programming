import AddMovieForm from "../../components/MovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";

function CreateMovie({movies, setMovies}){
    return(
        <>
          <Hero/>
          <AddMovieForm movies={movies} setMovies={setMovies}/>
            
       
        </>
    );
}

export default CreateMovie;