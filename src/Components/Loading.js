import React from 'react';

function Loading(props) {
    return (
        <div className="flex gap-2 justify-center">
            <div className="w-7 h-7 rounded-full animate-ping bg-amber-600"></div>
            <div className="w-7 h-7 rounded-full animate-ping bg-amber-600"></div>
            <div className="w-7 h-7 rounded-full animate-ping bg-amber-600"></div>
        </div>
    );
}

export default Loading;