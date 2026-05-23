import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import ChooseUs from "../section/home1/ChooseUs";
import Funfact from "../section/home1/Funfact";
import Video from "../section/home1/Video";
import Teams from "../section/about/Teams";

function AboutUs() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="About Us" />
                <About />
                <Service />
                <ChooseUs />
                <Funfact />
                <Video />
                <Teams />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs