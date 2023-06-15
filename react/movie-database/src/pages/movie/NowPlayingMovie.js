import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovies(){
  
    //membuat state
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getNowPlayingMovies();
       
    });

    async function getNowPlayingMovies(){
         // fetch data dari axios
         const response = await axios(ENDPOINTS.NOW_PLAYING);
 
         setMovies(response.data.results)

    }

    console.log(movies);

    return(
        <>
            <Hero />
            <Movies title="Now Playing" movies={movies}/>
           
        </>
    );
}

export default NowPlayingMovies;