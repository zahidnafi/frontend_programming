import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular(){
   
    //membuat state
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getPopularMovies();
       
    });

    async function getPopularMovies(){
         // fetch data dari axios
         const response = await axios(ENDPOINTS.POPULAR);
 
         setMovies(response.data.results)

    }

    console.log(movies);

    return(
        <>
            <Hero />
            <Movies title="Popular" movies={movies}/>
           
        </>
    );
}

export default Popular;