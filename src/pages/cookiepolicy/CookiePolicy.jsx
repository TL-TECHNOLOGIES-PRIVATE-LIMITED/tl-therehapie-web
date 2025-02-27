import React from 'react'
import { Layout } from "../../layouts/Layout";
import CookiePolicyComp from '../../components/cookiepolicy/CookiePolicyComp';

function CookiePolicy() {
    return (
        <Layout breadcrumbTitle={"Cookie Policy"} breadcrumbSubtitle={"Cookie Policy"}>
            <CookiePolicyComp/>
        </Layout>
    )
}

export default CookiePolicy
