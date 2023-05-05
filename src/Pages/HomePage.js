import React from 'react';
import SearchInput from "../Components/SearchInput";

function HomePage(props) {
    return (
        <div className={"h-screen"} style={props.style}>
            <SearchInput className="h-full" title={"Find your next Show"}
                         body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "}/>
        </div>
    );
}

export default HomePage;