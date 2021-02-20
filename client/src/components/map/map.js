import React from 'react';
import mapboxgl from 'mapbox-gl';
import "./map.css";
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from "mapbox-gl-geocoder";

// TODO Heroku doesn't support environment variable on build time
mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb2VibGFja3dlbGwiLCJhIjoiY2trYnVpZzFwMGZlazJwcGM5a2RlOXh0cCJ9.knhq7x98ERcUfvXD08kCAQ";


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

        map.on('click', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['tracks-2']
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];

            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h4>' + feature.properties.title + '</h4>')
                .addTo(map);
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