import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import Footer from './Footer';
import {
  medium,
  mediumLarge,
  spacingUnit,
  footerHeight,
} from '../../styles/variables';
import Aside from './Aside';

const containerStyles = css`
  display: flex;
  width: 100%;
  height: 100%;

  @media (${medium}) {
    width: 768px;
    margin: 0 auto;
  }

  @media (${mediumLarge}) {
    width: 1024px;
    margin: 0 auto;
  }
`;

const mainStyles = css`
  flex: 1;
  min-height: calc(100vh - ${footerHeight});
  padding: ${spacingUnit};
  padding-bottom: calc(4 * ${spacingUnit});

  @media (${medium}) {
    padding-left: calc(2 * ${spacingUnit});
    padding-right: calc(2 * ${spacingUnit});
  }

  @media (${mediumLarge}) {
    padding-left: calc(3 * ${spacingUnit});
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div css={containerStyles}>
        <Aside />
        <main css={mainStyles}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
