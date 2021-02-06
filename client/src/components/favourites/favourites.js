import React, { useState, useEffect } from "react";
import { getFavourites } from "../../utils/favouritesFunctions";
import { Button, Card, CardDeck } from 'react-bootstrap';

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
            <CardDeck>
                {favourites.map(favourite => (
                    <Card>
                        <Card.Text>
                            {favourite.track.track_name}
                            {favourite.track.track_location}
                            {favourite.track.track_distance}
                        </Card.Text>
                    </Card>
                ))}
            </CardDeck>
        </div>
    )
}


export default FavouriteList;