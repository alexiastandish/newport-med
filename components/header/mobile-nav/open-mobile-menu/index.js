import React from "react";
import {
  StyledOpenMobileMenu,
  StyledMobileLinkList,
  StyledMobileLink
} from "./styles";
import Link from "next/link";

const OpenMobileMenu = ({ menuOpen, handleMenuToggle, ...props }) => {
  const navLinks = [
    {
      slug: "/about",
      link: "About"
    },
    {
      slug: "/process",
      link: "Process"
    },
    {
      slug: "/services",
      link: "Services"
    },
    {
      slug: "/testimonials",
      link: "Testimonials"
    }
  ];

  return (
    <StyledOpenMobileMenu
      menuOpen={menuOpen}
      className={menuOpen ? "open" : "closed"}
    >
      <StyledMobileLinkList>
        {navLinks.map((item, index) => {
          return (
            <StyledMobileLink key={item.link} {...props}>
              <Link href={item.slug}>
                <a>{item.link}</a>
              </Link>
            </StyledMobileLink>
          );
        })}
      </StyledMobileLinkList>
    </StyledOpenMobileMenu>
  );
};
export default OpenMobileMenu;
