import React from 'react';

interface Props {
    address: string,
}

function Map(props: Props): React.ReactElement {
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
        <div className="map">
            <img src={`${BASE}?${KEY}${CENTER}${FORMAT}${MAPTYPE}${MARKERS}${SCALE}${SIZE}${ZOOM}`} />
        </div>
    );
}

export default Map;
