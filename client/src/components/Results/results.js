import React, { useState, useEffect } from "react";
import { Button, Card, CardDeck } from 'react-bootstrap';
import { getTracks, addTrack } from "../../utils/trackFunctions";


function SearchResults() {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        getTracks().then(data => {
            setTracks(data);
        })
    }, []);

    return (
        <div>
            {tracks.map(track => (
                <Card>
                    <Card.Title>
                        {track.track_name}
                    </Card.Title>
                    <Card.Text>
                        {track.track_location}<br></br>
                        {track.track_distance}
                    </Card.Text>
                    <Card.Footer>
                        <Button onClick={() => addTrack(track._id)} className="primary">Add to favourites</Button>
                    </Card.Footer>
                </Card>
            ))}
        </div >
    )
};

export default SearchResults;
