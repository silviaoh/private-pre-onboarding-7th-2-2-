import React from 'react';
import styled from 'styled-components';
import MainHeader from '../common/MainHeader';

const MainHeaderLayout = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <MainSection>{children}</MainSection>
    </React.Fragment>
  );
};

export default MainHeaderLayout;

const MainSection = styled.section``;
