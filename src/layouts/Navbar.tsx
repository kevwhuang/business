import React from 'react';
import {
    Link,
    Outlet,
    useNavigate,
} from 'react-router-dom';

import useStore from '../hooks/useStore';

function Navbar(): React.ReactElement {
    const admin = useStore(s => s.admin);
    const logout = useStore(s => s.logout);
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <h1>Business Directory</h1>
                <Link to="/">Main</Link>
                {admin ? <button onClick={logout}>Logout</button>
                    : <button onClick={() => navigate('login')}>Login</button>}
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
