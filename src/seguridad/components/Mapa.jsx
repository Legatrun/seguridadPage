import React, { Component, useMemo } from 'react';
import {
    GoogleMap,
    useLoadScript,
    MarkerF
} from '@react-google-maps/api'

export const Mapa = (props) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDo3ZO_FVoWjXJ4Z2AgPodlDQgWRVhs8w"
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <Map />
    )
}

function Map() {

    const center = useMemo(() => ({ lat: -16.511400, lng: -68.165090 }), [])

    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="map-container"
        >
            <MarkerF position={center} />
        </GoogleMap>)
}