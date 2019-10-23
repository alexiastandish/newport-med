import React from 'react';
import {
  StyledDesktopNav,
  StyledNewportMedLogo,
  StyledNavLinksWrapper
} from './styles';
import Link from 'next/link';
import { ATag } from '../../../styles/common';
//import './.css';

const DesktopNav = ({ stickyNav, router }) => {
  return (
    <StyledDesktopNav stickyNav={stickyNav}>
      <StyledNewportMedLogo
        src="/static/images/logos/npm-logo.png"
        alt="newport-med"
        onClick={() => router.push('/')}
      />
      <StyledNavLinksWrapper>
        <Link href="/about">
          <ATag>About</ATag>
        </Link>
        <Link href="/process">
          <ATag>Process</ATag>
        </Link>
        <Link href="/services">
          <ATag>Services</ATag>
        </Link>
        <Link href="/testimonials">
          <ATag>Testimonials</ATag>
        </Link>
      </StyledNavLinksWrapper>
    </StyledDesktopNav>
  );
};
export default DesktopNav;
