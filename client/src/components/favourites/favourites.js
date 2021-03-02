import React, { useState, useEffect } from "react";
import { getFavourites, deleteFavourites } from "../../utils/favouritesFunctions";
import { Button, Card } from 'react-bootstrap';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import "./style.css";

// Once button has been clicked, moves card to favourites page. Similar to homepage 

// Allows user to delete from favourites 
function FavouriteList() {

    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        getFavourites().then(data => {
            setFavourites(data);
        })
    }, []);


    return (
        <div>
            <div className="container">
                <div className="row">
                    {favourites.map(favourite => (
                        <Card key={favourite.track._id} style={{ width: '18rem', display: "flex" }}>
                            <Card.Text>
                                <Card.Img className="image" src={favourite.track.track_image} alt={favourite.track.track_name} />
                                {favourite.track.track_name}<br></br>
                                <LocationOnIcon />{favourite.track.track_location}<br></br>
                                <FontAwesomeIcon icon={faRoute} />{favourite.track.track_distance}<br></br>
                                <AccessTimeIcon /> {favourite.track.track_duration}<br></br>
                                <DirectionsWalkIcon /> {favourite.track.track_intensity}
                            </Card.Text>
                            <Button onClick={() => {
                                deleteFavourites(favourite._id);
                                alert(favourite.track.track_name + " deleted from favourites")
                            }}>Remove from favourites</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    )
}


export default FavouriteList;