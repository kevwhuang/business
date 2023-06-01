import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import useStore from '../hooks/useStore';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Table(): React.ReactElement {
    const [admin, listings, sort] = useStore(s => [s.admin, s.listings, s.sort]);
    const [deleteListing, sortListings] = useStore(s => [s.deleteListing, s.sortListings]);

    return (
        <main className="table">
            <ul className="table__header">
                <li onClick={sortListings}>
                    Name
                    {sort === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                </li>
                <li>Description</li>
                <li>Address</li>
                {admin && <li>Delete</li>}
            </ul>
            {listings.map(listing => (
                <ul className="table__content" key={uuid()}>
                    <li>
                        <Link to={`listing/${listing.id}`}>{listing.name}</Link>
                    </li>
                    <li>
                        {listing.description[0].toUpperCase()}{listing.description.slice(1)}
                    </li>
                    <li>
                        {listing.address}
                    </li>
                    {admin &&
                        <li>
                            <DeleteOutlinedIcon onClick={() => deleteListing(listing.id)} />
                        </li>
                    }
                </ul>
            ))}
        </main>
    );
}

export default Table;
