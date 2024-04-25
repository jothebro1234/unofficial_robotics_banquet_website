// Imports:

// Stylesheet:
import "./home.css";

// Containers:
import { Heading, Events } from "../../containers";

// Components:
import { Navigation } from "../../components";

// React:
import React from "react";
import Gallery from "../../containers/gallery/gallery";
import Sponsors from "../../containers/sponsors/sponsors";
import Footer from "../../containers/footer/footer";

// Home:
const Home = () => {
    return (
        <>
            <Navigation />
            <Heading />
            <Events />
            <Gallery />
            <Sponsors />
            <Footer />
        </>
    )
}

// Exports:
export default Home;