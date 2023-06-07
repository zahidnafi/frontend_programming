
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero"

function TopRatedMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;

    //membuat state
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getTopRatedMovies();
       
    });

    async function getTopRatedMovies(){
         // fetch data dari axios
         const response = await axios(URL);
 
         setMovies(response.data.results)

    }

    console.log(movies);

    return(
        <>
            <Hero />
            <Movies movies={movies}/>
           
        </>
    );
}

export default TopRatedMovie;