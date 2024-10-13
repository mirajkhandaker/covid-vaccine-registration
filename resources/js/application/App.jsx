// resources/js/components/App.jsx

import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./component/shared/Navbar.jsx";
import Registration from "./pages/register/Registration.jsx";
import Search from "./pages/search/Search.jsx";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Navigate to="/register" replace />}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
