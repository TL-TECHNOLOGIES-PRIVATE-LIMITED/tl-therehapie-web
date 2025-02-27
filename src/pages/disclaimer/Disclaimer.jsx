import React from 'react'
import { Layout } from "../../layouts/Layout";
import DisclaimerComp from '../../components/disclaimer/DisclaimerComp';

function Disclaimer() {
    return (
        <Layout breadcrumbTitle={"Disclaimer"} breadcrumbSubtitle={"Disclaimer"}>
            <DisclaimerComp/>
        </Layout>
    )
}

export default Disclaimer
