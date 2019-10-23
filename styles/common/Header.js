import styled from 'styled-components';
import { colors } from '../_variables';

const Header = styled.h1`
  font-family: Work Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: ${props => props.theme.fg || colors.blue};
  transition: 400ms ease-in;
`;

export { Header };
