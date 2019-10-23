import styled from 'styled-components';
import { Hero, Column } from '../../../styles/common';

const StyledProcessHero = styled(Hero)`
  min-height: 400px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

const StyledCol = styled(Column)`
  img {
    width: 100%;
  }
`;

const StyledContentCol = styled(Column)`
  flex: 0 0 40%;
  max-width: 40%;
`;

export { StyledProcessHero, StyledCol, StyledContentCol };
