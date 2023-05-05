import React from 'react';
import SearchInput from "../Components/SearchInput";
import ShowList from "../Components/Show/ShowList";
import {useEffect, useState} from "react";
import axios from "axios";
import ListDataContext from "../Context/ListDataContext";


function SearchPage(props) {
    const [moviesList,setMoviesList] = useState({})
    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows').then((res) => {
            setMoviesList([...res.data])
            // console.log(res.data)
        })
    },[])
    return (
        <div className="min-h-screen">
            <ListDataContext.Provider value={{moviesList}}>
                <SearchInput className="" style={{minHeight: "20rem", height: "20vh"}}/>
                <ShowList/>
            </ListDataContext.Provider>
        </div>
    );
}

export default SearchPage;