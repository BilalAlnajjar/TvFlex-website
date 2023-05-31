import React, {createContext, useState} from "react";

const LoadingContext = createContext()

function LoadingShowProvider(props) {
    const [state,setState] = useState(false)
    const changeLoading = () => {
        setState(!state)
    }

    return (
        <LoadingContext.Provider value={{state,changeLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}


export {LoadingContext,LoadingShowProvider}