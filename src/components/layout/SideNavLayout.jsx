import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexStyle } from '../../style/common.style';
import SideNavigation from '../common/SideNavigation';

const SideNavLayout = () => {
  return (
    <SideNavLayoutSection gap="4rem">
      <SideNavigation />
      <SideNavLayoutMain>
        <Outlet />
      </SideNavLayoutMain>
    </SideNavLayoutSection>
  );
};

export default SideNavLayout;

const SideNavLayoutSection = styled.section`
  ${FlexStyle}
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_GRAY};

  > aside {
    flex-basis: 32rem;
    flex-grow: 1;
    position: fixed;
    height: 100%;
  }
`;

const SideNavLayoutMain = styled.main`
  margin: 0 4rem 8rem 32rem;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_GRAY};
  width: 100%;
`;
