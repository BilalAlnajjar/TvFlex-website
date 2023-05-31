import React, {useEffect, useState} from 'react';
import ListDataContext from "../Context/ListDataContext";
import axios from "axios";

function MoviesListProvider({children}) {
    const [movies,setMovies] = useState(useEffect(() => {}))

    const getMovies = async () => {
        const {data} = await axios.get('https://api.tvmaze.com/shows')
        setMovies(data)
        console.log(movies)
    }

    useEffect(() => {

        getMovies()
    }, [])

    return (
        <ListDataContext.Provider value={movies}>
            {children}
        </ListDataContext.Provider>
    );
}

export default MoviesListProvider;
