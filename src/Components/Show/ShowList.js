import React, {useContext} from 'react';

import ShowItem from "./ShowItem";
import ListDataContext from "../../Context/ListDataContext";


function ShowList(props) {

    const listContext = useContext(ListDataContext)
    console.log(listContext)
    const list = Array.isArray(listContext) ? listContext : []
    return (
        <div className="flex flex-wrap  p-7 justify-center gap-3">
            {
                list.map((element, index) => {
                    return (
                        <div key={index}>
                            <ShowItem id={element.id} imageCover={element.image.medium} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowList;