import React, { useState, useEffect } from "react";
import { Button, Card, CardDeck } from 'react-bootstrap';
import { getTracks, addTrack } from "../../utils/trackFunctions";


function SearchResults() {

    const [tracks, setTracks] = useState([]);
    const [result, setResult] = useState("");


    useEffect(() => {
        getTracks().then(data => {
            setTracks(data);
        })
    }, []);

    useEffect(() => {
        const results = tracks.filter(res => res.track_name.toLowerCase().includes(result)

        );
        setTracks(results)
    }, [result])


    const onChange = (e) => {
        setResult(e.target.value);
    }

    return (
        <div>
            <form>
                <input
                    value={result}
                    onChange={onChange}
                    name="search"
                    type="text"
                    label="Search!"
                    className="form-control"
                    placeholder="Search Name"
                    id="searchBar"
                />
                <button type="submit" className="btn btn-success mt-3 searchButton">
                    Search
                </button>
            </form>
            {tracks.map(track => (
                <Card>
                    <Card.Title>
                        {/* {track.track_image} */}
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
