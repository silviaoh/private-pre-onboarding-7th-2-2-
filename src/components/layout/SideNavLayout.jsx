import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../common/SideNavigation';

const SideNavLayout = ({ children }) => {
  return (
    <SideNavLayoutSection>
      <SideNavigation />
      <SideNavLayoutMain>{children}</SideNavLayoutMain>
    </SideNavLayoutSection>
  );
};

export default SideNavLayout;

const SideNavLayoutSection = styled.section``;

const SideNavLayoutMain = styled.main``;
