import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/Home1/About";
import Service from "../section/Home1/Service";
import ChooseUs from "../section/Home1/ChooseUs";
import Funfact from "../section/Home1/Funfact";
import Video from "../section/Home1/Video";
import Teams from "../section/About/Teams";

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