import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';

import Error from './pages/Error';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/media.scss';

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Listing />} >
            <Route path="listing/:id" />
        </Route>
        <Route path="login" element={<Login />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<Fallback />} />
    </React.StrictMode>
);
