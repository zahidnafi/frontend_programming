import {createSlice} from "@reduxjs/toolkit"
import data from "../utils/constants/data"

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState:{
        movies: data,
    }, 
    reducers:{
        addMovie(state, action) {},
    },

    
});

const {addMovie} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export{addMovie};
export default moviesReducer;
