import React from 'react';

function Map(props: { address: string }): React.ReactElement {
    const BASE = 'https://maps.googleapis.com/maps/api/staticmap';
    const CENTER = `&center=${props.address.replaceAll('#', '')}`;
    const FORMAT = '&format=png';
    const KEY = `&key=${import.meta.env.VITE_KEY_GOOGLE}`;
    const MAPTYPE = '&maptype=hybrid';
    const MARKERS = `&markers=size:mid|color:red|${props.address.replaceAll('#', '')}`;
    const SCALE = '&scale=1';
    const SIZE = '&size=500x500';
    const ZOOM = '&zoom=14';

    return (
        <img
            src={`${BASE}?${KEY}${CENTER}${FORMAT}${MAPTYPE}${MARKERS}${SCALE}${SIZE}${ZOOM}`}
            alt={props.address}
        />
    );
}

export default Map;
