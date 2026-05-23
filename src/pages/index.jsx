import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Feature from "../section/home1/Feature";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import ChooseUs from "../section/home1/ChooseUs";
import Funfact from "../section/home1/Funfact";
import Video from "../section/home1/Video";
import Teams from "../section/home1/Teams";
import Feature2 from "../section/home1/Feature2";
import Testimonial from "../section/home1/Testimonial";
import Faqs from "../section/home1/Faqs";
import News from "../section/home1/News";
import Contact from "../section/home1/Contact";
import Clients from "../section/home1/Clients";

function Home1() {
    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <Banner />
                <Feature />
                <About />
                <Service />
                <ChooseUs />
                <Funfact />
                <Video />
                <Teams />
                <Feature2 />
                <Testimonial />
                <Faqs />
                <News />
                <Contact />
                <Clients />
            </Layout>
        </div>
        </>
    );
}
export default Home1;