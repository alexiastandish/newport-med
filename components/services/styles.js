import styled from "styled-components";
import { Hero, Box } from "../../styles/common";

const StyledServicesHero = styled(Hero)`
  background-image: url("/images/services/services-hero-bg.jpg");
  background-size: 100%;
`;

const StyledServiceBoxes = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 30px;
`;

const StyledServiceBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 10px;
  align-items: center;
  img {
    width: 75px;
    margin-top: 25px;
  }

  a {
    text-decoration: none;
  }
`;

export { StyledServicesHero, StyledServiceBoxes, StyledServiceBox };
