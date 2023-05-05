import React from 'react';

function ShowItem(props) {

    return (
            <div className="w-56 h-80 bg-contain bg-center "
                 style={{backgroundImage: `url(${props.imageCover})`}}>
               <a href="#"  className=" py-5 w-full h-80 flex flex-col items-center justify-between bg-zinc-900 opacity-0 hover:opacity-80 text-amber-400">
                   <div className="flex flex-col">
                       <div className="text-2xl font-bold">4.5</div>
                   </div>
                   <div className="text-xl font-bold">
                       Bilal Othman
                   </div>
               </a>
            </div>
            );
            }

            export default ShowItem;