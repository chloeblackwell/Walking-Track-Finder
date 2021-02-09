import React from 'react';
import mapboxgl from 'mapbox-gl';
import "./map.css";
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from "mapbox-gl-geocoder";

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

        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            })
        );

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

    }

    render() {
        return (
            <div>
                <div>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>

                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default DisplayMap;