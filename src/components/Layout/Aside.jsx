import React, { useEffect, useState } from "react";
import { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { primary, borderColor } from "../../styles/colors";
import {
  asideWidth,
  mediumLarge,
  spacingUnit,
  footerHeight,
  medium
} from "../../styles/variables";

export default function Aside() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenu = windowWidth < 1024;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const sideBarStyles = css`
    position: absolute;
    width: ${asideWidth};
    top: 0;
    left: ${menuOpen ? 0 : `-${asideWidth}`};
    bottom: 0;
    padding: calc(2 * ${spacingUnit}) 0;
    z-index: 2;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media (${mediumLarge}) {
      position: static;
      left: 0;
      bottom: ${footerHeight};
      box-shadow: none;
    }
  `;

  const innerSidebarStyles = css`
    padding: ${spacingUnit};
    height: 100%;

    @media (${mediumLarge}) {
      border-right: 2px solid ${borderColor};
    }
  `;

  const buttonStyles = css`
    position: absolute;
    background-color: ${primary};
    color: white;
    padding: 0.5em;
    font-size: 3rem;
    border-radius: 50%;
    top: calc(2 * ${spacingUnit});
    right: calc(2 * ${spacingUnit});
    line-height: 0;

    @media (${medium}) {
      font-size: 3.6rem;
    }
  `;

  const scrimStyles = css`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.56);
  `;

  return (
    <>
      <aside css={sideBarStyles}>
        <div css={innerSidebarStyles}>TODO</div>
      </aside>
      {menuOpen && <div css={scrimStyles} onClick={closeMenu} />}
      {mobileMenu && (
        <button type="button" css={buttonStyles} onClick={openMenu}>
          <FaBars />
        </button>
      )}
    </>
  );
}
