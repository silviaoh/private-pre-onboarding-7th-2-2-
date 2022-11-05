import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexStyle } from '../../style/common.style';
import SideNavigation from '../common/SideNavigation';

const SideNavLayout = () => {
  return (
    <SideNavLayoutSection>
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
  background-color: ${({ theme }) => theme.colors.WHITE};
  min-height: 100vh;
  overflow-y: auto;

  > aside {
    flex-basis: 35rem;
  }
`;

const SideNavLayoutMain = styled.main`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_GRAY};
  width: 100%;
`;
