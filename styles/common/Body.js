import styled from 'styled-components';
import { colors } from '../_variables';

const Body = styled.p`
  font-size: 22;
  line-height: 30px;
  font-family: Montserrat;
  color: ${props => (props.color ? props.color : colors.black)};
  font-style: normal;
  margin-top: 5px;
  letter-spacing: 0.1px;
  font-weight: 400;
  ${props => (props.style ? props.style : null)}
`;

export { Body };
