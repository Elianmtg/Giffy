import React from "react";
import "../Gif"
import Gif from '../Gif';

export default function ListOfGif({gifs}){

    return (
        <div className="listOfGifs">
            {
                gifs.map(({id,title,url}) =>
                    <Gif
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                        /* key={singleGif.id}
                        id={singleGif.id}
                        title={singleGif.title}
                        url={singleGif.url} */
                        /* {...singleGif} spread operator y se le pasan todas las props */
                    />
                )
            }
        </div>
    )
}