import React from 'react';
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header className="p-9 h-24 box-border flex w-full justify-between absolute">
            <Link to="/" className="max-w-full">
                <img className="max-w-full max-h-full" alt="logo" src={props.logo} />
            </Link>

            <Link className="text-white text-xl font-bold hover:text-amber-400 " to={"/search"}>Search</Link>
        </header>
    );
}

export default Header;