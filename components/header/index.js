import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import { StyledNavWrapper } from "./styles";
import { withRouter } from "next/router";

import DesktopNav from "./desktop-nav";

const Header = props => {
  const [stickyNav, setStickyNav] = useState(false);

  const getPosition = ({ currentPosition, previousPosition }) => {
    if (previousPosition === "above") {
      return setStickyNav(false);
    }
    if (previousPosition === "inside" || currentPosition === "above") {
      return setStickyNav(true);
    }
    return;
  };

  return (
    <Waypoint onPositionChange={getPosition}>
      <div style={{ position: "relative", zIndex: 5 }}>
        <StyledNavWrapper stickyNav={stickyNav || props.navLight}>
          <DesktopNav
            stickyNav={stickyNav}
            navLight={props.navLight}
            router={props.router}
          />
        </StyledNavWrapper>
      </div>
    </Waypoint>
  );
};
export default withRouter(Header);
