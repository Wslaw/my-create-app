import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SecondPage from "./Pages/SecondPage/SecondPage";
import ThirdPage from "./Pages/ThirdPage/ThirdPage";
import FourthPage from "./Pages/FourthPage/FourthPage";
import FifthPage from "./Pages/FifthPage/FifthPage";
import SixthPage from "./Pages/SixthPage/SixthPage";
import SeventhPage from "./Pages/SeventhPage/SeventhPage";
import EighthPage from "./Pages/EighthPage/EighthPage";
import NinthPage from "./Pages/NinthPage/NinthPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
    
import styles from "./app-routes.module.css";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


const AppRoutes=()=> {
    
    return (
        <Router>
            <div className={styles.container}>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/task/1" element={<FirstPage />}/>
                    <Route path="/task/2" element={<SecondPage />} />
                    <Route path="/task/3" element={<ThirdPage/>}/>
                    <Route path="/task/4" element={<FourthPage/>}/>
                    <Route path="/task/5" element={<FifthPage/>}/>
                    <Route path="/task/6" element={<SixthPage/>}/>
                    <Route path="/task/7" element={<SeventhPage/>}/>
                    <Route path="/task/8" element={<EighthPage/>}/>
                    <Route path="/task/9" element={<NinthPage />} />
                    
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default AppRoutes;
