import React from 'react'
import { Layout } from "../../layouts/Layout";
import TandC from '../../components/tandc/tandc';
// import { AboutFive } from "../../components/about/AboutFive";
// import { HistoryOne } from "../../components/history/HistoryOne";
// import { TeamFour } from "../../components/teams/TeamFour";
// import { BrandTwo } from "../../components/brands/BrandTwo";

function TermsAndConditions() {
    return (
        <Layout breadcrumbTitle={"Terms and Conditions"} breadcrumbSubtitle={"T & C"}>
            <TandC />
        </Layout>
    )
}

export default TermsAndConditions
