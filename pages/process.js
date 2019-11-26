import React from "react";
import { ThemeProvider } from "../styles/theme";
import { Hero, Container } from "../styles/common";
import Layout from "../components/layouts";

const Process = props => {
  return (
    <Layout>
      <ThemeProvider>
        <Hero>
          <Container>
            Because our goal is to increase client revenue and decrease wasteful
            processes, we never stop refining and improving operations, products
            and services. The latest technology and proprietary processes are
            used to ensure all charges are captured, documented, submitted and
            paid. We rank in the top 5% in all of the most important MGMA
            benchmarks, and we continue to make strides in the areas of
            accuracy, turnaround time and revenue maximization. We believe in
            doing it right the first time!
          </Container>
        </Hero>
      </ThemeProvider>
    </Layout>
  );
};
export default Process;
