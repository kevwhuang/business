import React from 'react';

import useStore from '../hooks/useStore';

import AddListing from '../components/AddListing';
import Info from '../components/Info';
import Table from '../components/Table';

function Home(): React.ReactElement {
    const admin = useStore(s => s.admin);

    return (
        <>
            <div className={admin ? 'container' : 'container admin'}>
                <Info />
                {admin && <AddListing />}
            </div>
            <Table />
        </>
    );
}

export default Home;
