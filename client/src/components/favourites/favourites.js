import React, { useState, useEffect } from "react";
import { getFavourites } from "../../utils/favouritesFunctions";

// Once button has been clicked, moves card to favourites page. Similar to homepage 

// Allows user to delete from favourites 
function FavouriteList() {

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        getFavourites().then(data => {
            console.log(data);
            setFavourites(data);
        })
    }, []);
    return (
        <div>
            <ul>
                <li>

                </li>
            </ul>



        </div>
    )
}


export default FavouriteList;