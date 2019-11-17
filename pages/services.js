import React from "react";
import { ThemeProvider, base } from "../styles/theme";
import { centered } from "../styles/theme/_layout";
import { Container, Header, Subheader, Box } from "../styles/common";
import {
  StyledServicesHero,
  StyledServiceBoxes,
  StyledServiceBox
} from "../components/services/styles";
import { hero } from "../content/services-page.json";
import Layout from "../components/layouts";

import RevenueCycleManagement from "../components/services/revenue-cycle-management";
import CloudBasedServices from "../components/services/cloud-based-services";
import SolutionsIntegration from "../components/services/solutions-integration";
import PracticeAdvocates from "../components/services/practice-advocates";

const Services = props => {
  const setSection = section => {
    let target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={base}>
        <StyledServicesHero layout={centered}>
          <Container>
            <Header>{hero.header}</Header>
            <Subheader>{hero.subheader}</Subheader>
            <StyledServiceBoxes>
              {hero.services.map(service => {
                return (
                  <StyledServiceBox
                    onClick={() => setSection(service.link)}
                    key={service.service}
                  >
                    <img src={service.icon} alt={service.service} />
                    <Subheader>{service.service}</Subheader>
                  </StyledServiceBox>
                );
              })}
            </StyledServiceBoxes>
          </Container>
        </StyledServicesHero>
      </ThemeProvider>

      <div id={hero.services[0].link}>
        <RevenueCycleManagement />
      </div>
      <div id={hero.services[1].link}>
        <CloudBasedServices />
      </div>
      <div id={hero.services[2].link}>
        <SolutionsIntegration />
      </div>
      <div id={hero.services[3].link}>
        <PracticeAdvocates />
      </div>
    </Layout>
  );
};
export default Services;
