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
            <div className="container-0">
                <nav className="navbar">
                    <h1>Business Directory</h1>
                    <div className="navbar__links">
                        <Link to="/">Main</Link>
                        {admin ? <a onClick={logout}>Logout</a>
                            : <a onClick={() => navigate('login')}>Login</a>}
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
