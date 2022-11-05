import React from 'react';
import styled from 'styled-components';
import { FlexStyle } from '../../style/common.style';
import MainHeader from '../common/MainHeader';

const MainHeaderLayout = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <MainSection flexDirection="column" gap="2rem">
        {children}
      </MainSection>
    </React.Fragment>
  );
};

export default MainHeaderLayout;

const MainSection = styled.section`
  ${FlexStyle}
`;
