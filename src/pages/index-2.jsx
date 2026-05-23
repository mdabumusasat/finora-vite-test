import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home2/Banner";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import Cta from "../section/home2/Cta";
import ChooseUs from "../section/home2/ChooseUs";
import Feature from "../section/home2/Feature";
import Pricing from "../section/home2/Pricing";
import Feature2 from "../section/home2/Feature2";
import Teams from "../section/home2/Teams";
import Testimonial from "../section/home2/Testimonial";
import Funfact from "../section/home2/Funfact";
import Faqs from "../section/home2/Faqs";
import Clients from "../section/home2/Clients";
import Contact from "../section/home2/Contact";
import News from "../section/home2/News";

function Home2() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="two">
                <Banner />
                <About />
                <Service />
                <Cta />
                <ChooseUs />
                <Feature />
                <Pricing />
                <Feature2 />
                <Teams />
                <Testimonial />
                <Funfact />
                <Faqs />
                <Clients />
                <Contact />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home2