import {createSlice} from "@reduxjs/toolkit"
import data from "../utils/constants/data"

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState:{
        movies: data,
    }, 
    reducers:{
        addMovie(state, action) {
            state.movies.push(action.payload);
        },

        updateMovie(state,action){
            state.movies = action.payload;
        }
    },


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

    
});

const {addMovie, updateMovie} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export{addMovie, updateMovie};
export default moviesReducer;
