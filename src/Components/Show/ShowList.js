import React, {useContext} from 'react';

import ShowItem from "./ShowItem";
import ListDataContext from "../../Context/ListDataContext";

function ShowList(props) {

    const {moviesList} = useContext(ListDataContext)
    const list = Array.isArray(moviesList) ? moviesList : []
    return (
        <div className="flex flex-wrap  p-7 justify-center gap-4">
            {
                list.map((element, index) => {
                    console.log(element.image)
                    return (
                        <div key={index}>
                            <ShowItem imageCover={element.image.medium} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowList;