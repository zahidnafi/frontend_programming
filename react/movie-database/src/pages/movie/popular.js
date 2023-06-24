import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function Popular(){
    const dispatch = useDispatch();

    //membuat state
    
    useEffect(()=>{
        getPopularMovies();
       
    });

    async function getPopularMovies(){
         // fetch data dari axios
         const response = await axios(ENDPOINTS.POPULAR);
         const movies = response.data.results;
         dispatch(updateMovie(movies));

    }

    return(
        <>
            <Hero />
            <Movies title="Popular"/>
           
        </>
    );
}

export default Popular;