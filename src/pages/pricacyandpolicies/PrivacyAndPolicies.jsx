import React from 'react'
import { Layout } from "../../layouts/Layout";
import PandP from '../../components/pandp/PandP';

function PrivacyAndPolicies() {
    return (
        <Layout breadcrumbTitle={"Privacy Policy"} breadcrumbSubtitle={"P & P"}>
            <PandP/>
        </Layout>
    )
}

export default PrivacyAndPolicies
