import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFive } from "../../components/about/AboutFive";
import { HistoryOne } from "../../components/history/HistoryOne";
import { TeamFour } from "../../components/teams/TeamFour";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { ExperienceOne } from "../../components/experience/ExperienceOne";
import AboutSection from "../../components/about/AboutSec";
import AboutConclusion from "../../components/about/AboutConclusion";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      {/* <AboutFive /> */}
      <AboutSection/>
      {/* history */}
      <HistoryOne />
      <ExperienceOne />

      {/* brand */}
      <BrandTwo />
      <AboutConclusion/>
    </Layout>
  );
};
