import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Button from "../ui/Button/button";

function DetailMovie(){
    const StyledDetailMovie = styled.div`
        // Mobile Screen
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        text-align: center;
        img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        }
        h2 {
        font-size: 2.44rem;
        margin-bottom: 0.5rem;
        color: red;
        }
        h3 {
        font-size: 1.59rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.secondary};
        }
        p {
        text-align: justify;
        margin-bottom: 2rem;
        color: #64748b;
        }
        // Medium Screen: 768px
        @media screen and (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        .poster {
            flex-basis: 30%;
        }
        .info {
            flex-basis: 60%;
        }
        }
        // Large Screen
        @media screen and (min-width: 992px) {
        }
`;

    
    const {id} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState("")
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    async function fetchDetailMovie(){
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);

        setMovie(response.data);
    }

    useEffect(() =>{
        fetchDetailMovie();

    },[id] );


    return (
        <StyledDetailMovie>
        <div className="poster">
            <img
            src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
            alt={movie.title}
            />
        </div>
        <div className="info">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href= {trailer} target="_blank" >Watch Trailer</Button>

        </div>

        </StyledDetailMovie>
        
    );
}




export default DetailMovie;
