import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Feature from "../section/Home1/Feature";
import About from "../section/Home1/About";
import Service from "../section/Home1/Service";
import ChooseUs from "../section/Home1/ChooseUs";
import Funfact from "../section/Home1/Funfact";
import Video from "../section/Home1/Video";
import Teams from "../section/Home1/Teams";
import Feature2 from "../section/Home1/Feature2";
import Testimonial from "../section/Home1/Testimonial";
import Faqs from "../section/Home1/Faqs";
import News from "../section/Home1/News";
import Contact from "../section/Home1/Contact";
import Clients from "../section/Home1/Clients";

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