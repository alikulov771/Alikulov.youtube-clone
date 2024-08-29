import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "../main/main";
import Search from "../search/search";
import Navbar from "../navbar/navbar";
import VideoDetail from "../video-detail/video-detail";
import Channel from "../channel/channel";



function App() {
    return (
        <Router>
             <Navbar/>
            <Routes>
                <Route path={"/"} element={<Main/>} />
                <Route path={"/video/:id"} element={<VideoDetail/>} />
                <Route path={"/search/:id"} element={<Search/>} />
                <Route path={"/channel/:id"} element={<Channel/>} />


            </Routes>
        </Router>
    );
}

export default App;