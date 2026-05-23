import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import About from "../section/Home2/About";
import Service from "../section/Home2/Service";
import Cta from "../section/Home2/Cta";
import ChooseUs from "../section/Home2/ChooseUs";
import Feature from "../section/Home2/Feature";
import Pricing from "../section/Home2/Pricing";
import Feature2 from "../section/Home2/Feature2";
import Teams from "../section/Home2/Teams";
import Testimonial from "../section/Home2/Testimonial";
import Funfact from "../section/Home2/Funfact";
import Faqs from "../section/Home2/Faqs";
import Clients from "../section/Home2/Clients";
import Contact from "../section/Home2/Contact";
import News from "../section/Home2/News";

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