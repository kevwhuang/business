import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import useStore from '../hooks/useStore';

import Map from '../components/Map';

function Listing(): React.ReactElement {
    const listings = useStore(s => s.listings);
    const params: Readonly<any> = useParams();
    const [formattedAddress, setFormattedAddress]: [string, Function] = React.useState('');
    const [formattedCoordinates, setFormattedCoordinates]: [string, Function] = React.useState('');

    const listing = listings.filter(e => e.id === parseInt(params.id))[0];

    if (!listing) return (
        <div className="error">
            <h6>404: Resource not found.</h6>
        </div>
    );

    const [address, setAddress]: [string, Function] = React.useState(listing.address);

    (async function (key: string, address: string): Promise<void> {
        const BASE = 'https://maps.googleapis.com/maps/api/geocode/json';
        const endpoint = `${BASE}?key=${key}&address=${address}`;
        const res = await axios.get(endpoint);

        if (!res.data.results.length) {
            setAddress('Austin, TX');
            setFormattedAddress(`${listing.address}`);
            setFormattedCoordinates(`lat: <unknown> | long: <unknown>`);
            return;
        }

        const { lat, lng } = res.data.results[0].geometry.location;

        setFormattedAddress(res.data.results[0].formatted_address);
        setFormattedCoordinates(`lat: ${lat.toFixed(6)} | long: ${lng.toFixed(6)}`);
    }(import.meta.env.VITE_KEY_GOOGLE, listing.address));

    return (
        <section className="listing">
            <Map address={address} />
            <div className="listing__details">
                <p>{listing.name}</p>
                <p>{formattedAddress}</p>
                <p>{formattedCoordinates}</p>
                <p>{listing.description[0].toUpperCase()}{listing.description.slice(1)}</p>
            </div>
        </section>
    );
}

export default Listing;
