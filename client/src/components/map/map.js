import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl, { MapboxGeocoder } from 'mapbox-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import "./map.css";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


class DisplayMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 150,
            lat: -34,
            zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/chloeblackwell/ckkhz8k1d0dnf17ml1jls4wjs',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        var geocoder = new Geocoder({ mapboxApiAccessToken: mapboxgl.accessToken });
        map.addControl(geocoder);

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        // var geocoder = new Geocoder({ // Initialize the geocoder
        //     mapboxApiAccessToken: mapboxgl.accessToken, // Set the access token
        //     mapboxgl: mapboxgl, // Set the mapbox-gl instance
        //     marker: false, // Do not use the default marker style
        // });

        // // Add the geocoder to the map
        // map.addControl(geocoder);




    }

    render() {
        return (
            <div>
                <div>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                {/* <div position="top-left">{this.geocoder}</div> */}
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default DisplayMap;