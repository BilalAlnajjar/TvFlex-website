import React, {useContext} from 'react';
import SearchInput from "../Components/SearchInput";
import ShowList from "../Components/Show/ShowList";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import {LoadingContext} from "../Context/LoadingContext";
import {LoadingShowProvider} from "../Context/LoadingContext";


function SearchPage(props) {

    return (
        <div className="min-h-screen">
                <SearchInput className="" style={{minHeight: "20rem", height: "20vh"}}/>
            <ShowList />
        </div>
    );
}

export default SearchPage;