import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import Pricing from "../section/Home2/Pricing";

function PricingPage() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Pricing" />
                <Pricing />
            </Layout>
        </div>
        </>
    )
}
export default PricingPage