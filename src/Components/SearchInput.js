import React, {useState} from 'react';


function SearchInput(props) {

    const [searchTearm,setSearchTearm] = useState();
    return (
        <section className={"w-full flex flex-col items-center justify-center gap-6 " + props.className}  style={props.style}>
            {props.title ?
                <div className="text-white text-4xl font-bold">{props.title}</div>
                : ""
            }
            {props.body ?
                <div className="text-white text-sm">{props.body}</div>
                : ""
            }
            <form className="flex justify-center w-full">
                <input type="search" className="w-1/3 p-3" value={searchTearm}
                       onChange={(e) => setSearchTearm(e.target.value)} />
                <button className="p-3 w-36 text-white text-xl font-bold bg-amber-600">search</button>
            </form>
        </section>
    );
}

export default SearchInput;