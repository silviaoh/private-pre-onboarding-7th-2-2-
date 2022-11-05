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
    flex-basis: 35rem;
    flex-grow: 1;
  }
`;

const SideNavLayoutMain = styled.main`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_GRAY};
  margin-right: 4rem;
  width: 100%;
`;
