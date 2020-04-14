import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { secondary } from '../../styles/colors';
import { footerHeight } from '../../styles/variables';

export default function Footer() {
  const FooterEl = styled.footer`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    height: ${footerHeight};
    width: 100%;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background-color: ${secondary};
    color: white;
  `;

  const IconGroup = styled.div`
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;
    width: 200px;

    & > a,
    & > a:visited {
      color: white;
    }
  `;

  return (
    <FooterEl>
      <IconGroup>
        <a href="https://www.youtube.com/channel/UCVFXWl0jiVV8KlBa_eRVPyQ">
          <FaYoutube />
        </a>
        <a href="https://github.com/calebmchenry">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/caleb-mchenry-75301a152/">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/caleb_mchenry">
          <FaTwitter />
        </a>
      </IconGroup>
    </FooterEl>
  );
}
