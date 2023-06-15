
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
   
    //membuat state
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getTopRatedMovies();
       
    });

    async function getTopRatedMovies(){
         // fetch data dari axios
         const response = await axios(ENDPOINTS.TOP_RATED);
 
         setMovies(response.data.results)

    }

    console.log(movies);

    return(
        <>
            <Hero />
            <Movies title="Top Rated" movies={movies}/>
           
        </>
    );
}

export default TopRatedMovie;