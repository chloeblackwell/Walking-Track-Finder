import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import { getTracks, addTrack } from "../../utils/trackFunctions";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import "./style.css";


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
    }, []);


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
            <div className="container">
                <div className="row">
                    {tracks.map(track => (
                        <Card style={{ width: '18rem', display: "flex" }}>
                            <Card.Img className="image" src={track.track_image} alt={track.track_name} />
                            <Card.Title>
                                {/* {track.track_image} */}
                                {track.track_name}
                            </Card.Title>
                            <Card.Text>
                                <LocationOnIcon />{track.track_location}<br></br>
                                <FontAwesomeIcon icon={faRoute} /> {track.track_distance}<br></br>
                                <DirectionsWalkIcon />{track.track_intensity}
                            </Card.Text>
                            <Card.Footer>
                                <Button onClick={() => addTrack(track._id)} className="primary"><FavoriteIcon />Add to favourites</Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    )
};

export default SearchResults;
