import { Row, Column } from "../../styles/common";
import styled from "styled-components";

const StyledAboutRow = styled(Row)`
  align-items: flex-start;

  ${Column} {
    &:nth-of-type(1) {
      padding-right: 30px;
      box-sizing: border-box;
    }
    &:nth-of-type(2) {
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
`;

export { StyledAboutRow };
