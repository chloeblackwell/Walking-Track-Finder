import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import { getTracks, addTrack } from "../../utils/trackFunctions";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import "./style.css";


function SearchResults() {

    const [tracks, setTracks] = useState([]);
    const [result, setResult] = useState("");
    const [filtered, setFiltered] = useState([...tracks]);


    useEffect(() => {
        getTracks().then(data => {
            setTracks(data)
            setFiltered(data);
        })
    }, []);

    useEffect(() => {
        const search = new RegExp(result, "i")
        const results = tracks.filter(res => res.track_name.search(search) > -1
        );
        setFiltered(results)
    }, [result]);


    const onChange = (e) => {
        setResult(e.target.value);
    }

    return (
        <div>
            <form className="form-inline">
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
                    {filtered.map(track => (
                        <Card key={track._id} style={{ width: '18rem', display: "flex" }}>
                            <Card.Img className="image" src={track.track_image} alt={track.track_name} />
                            <Card.Title>
                                {/* {track.track_image} */}
                                {track.track_name}
                            </Card.Title>
                            <Card.Text>
                                <LocationOnIcon />{track.track_location}<br></br>
                                <FontAwesomeIcon icon={faRoute} /> {track.track_distance}<br></br>
                                <AccessTimeIcon />{track.track_duration}<br></br>
                                <DirectionsWalkIcon />{track.track_intensity}
                            </Card.Text>
                            <Card.Footer>
                                <Button onClick={() => {
                                    addTrack(track._id)
                                }} className="primary"><FavoriteIcon />Add to favourites</Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    )
};

export default SearchResults;
