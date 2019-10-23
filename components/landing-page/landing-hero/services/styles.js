import styled from 'styled-components';
import { Row, Box, Subheader } from '../../../../styles/common';

const StyledBoxesRow = styled(Row)`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledServiceBox = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 35px 30px;
  width: 425px;
  height: 350px;
  margin-bottom: 30px;
  position: relative;

  h1 {
    margin-top: 10px;
  }

  button {
    position: absolute;
    bottom: 30px;
  }
`;

const StyledServiceIcon = styled.div`
  width: 75px;
  height: 75px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    height: auto;
  }
`;

const StyledBoxSubheader = styled(Subheader)`
  margin-bottom: 0px;
  margin-top: 0px;
`;

export {
  StyledBoxesRow,
  StyledServiceBox,
  StyledServiceIcon,
  StyledBoxSubheader
};
