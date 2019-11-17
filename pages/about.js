import React from "react";
import Layout from "../components/layouts";
import { Header, Hero, Container, Body, Row, Column } from "../styles/common";
import { ThemeProvider, base, invert, lightGradient } from "../styles/theme";
import { StyledAboutRow } from "../components/about/styles";

//import './.css';

const About = props => {
  return (
    <Layout navLight>
      <ThemeProvider theme={invert(base)}>
        <Hero>
          <Container>
            <Row>
              <Header>
                NewportMed is a specialty specific Revenue Cycle Management
                (RCM) Company.
              </Header>
              <br />
              <Body color="white">
                We offer our clients a unique, blended approach to running the
                business of their practice(s). We have expertise in Orthopedics,
                Neurosurgery, Pain Management, Oncology and Gynecology. We have
                found that by focusing on the specialty practice, we are able to
                navigate the nuances that are common and unique to each
                specialty.
              </Body>
            </Row>
          </Container>
        </Hero>
      </ThemeProvider>
      <ThemeProvider theme={lightGradient(base)}>
        <Hero>
          <Container>
            <StyledAboutRow>
              <Column cols={2}>
                <Header>Our Story.</Header>
                <br />
                <Body>
                  NewportMed was founded in 2004 with a focus on surgical
                  specialties. In 2016 we formed OmniMed Solutions, Pvt. Ltd. in
                  Hyderabad, India to give us a work force that can easily scale
                  to focus on specific areas of the non-patience facing aspect
                  of Healthcare that demands volume, focus and integrity.
                  Instead of focusing on one aspect of the practice, our
                  partnership brings expertise on multiple levels to ensure
                  financial stability and promote growth. Utilizing technology
                  and process efficiency, as key resources, we are able to
                  capture our client’s revenue while minimizing their staffing
                  overhead and other associated costs.
                </Body>
              </Column>
              <Column cols={2}>
                <Header>Our Approach.</Header>
                <br />
                <Body>
                  Our overall approach is simplifying the complicated. Our
                  clients will tell you that we focus on every aspect of the RCM
                  process from beginning to end. We help them maximize their
                  revenue goals and minimize their expenditures. We do this by
                  touching every part of our clients’ practices from appointment
                  scheduling, pre-surgical payment capture, authorizations,
                  benefit validation, coding, data analytics and reporting, and
                  proactive feedback, which we call a “Value-Add.”
                  <br />
                  <br />
                  Together we fill a significant void by bringing scalability,
                  integrity and expertise to our marketplace.
                </Body>
              </Column>
            </StyledAboutRow>
          </Container>
        </Hero>
      </ThemeProvider>
    </Layout>
  );
};
export default About;
