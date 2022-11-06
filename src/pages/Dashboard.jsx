import React from 'react';
import styled from 'styled-components';
import { IconPolygonDown } from '../assets';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';
import {
  CardLayoutSection,
  FlexBox,
  FlexStyle,
  GrayFontParagraph,
  PageTitleH2,
} from '../style/common.style';

const Dashboard = () => {
  return (
    <MainHeaderLayout>
      <DashboardTitleSection>
        <PageTitleH2>대시보드</PageTitleH2>
        {/* TODO: react-datepicker */}
      </DashboardTitleSection>
      <IntegratedAdStatusSection flexDirection="column" gap="2rem">
        <IntegratedAdStatusH3>통합 광고 현황</IntegratedAdStatusH3>
        <CardLayoutSection>
          <NumberStatusSection gap="2rem">
            {[1, 2, 3, 4, 5, 6].map(() => (
              <NumberStatusBox flexDirection="column" gap="1rem">
                <StatueTitleH3>ROAS</StatueTitleH3>
                <FlexBox justifyContent="space-between">
                  <StatusValueSpan>697%</StatusValueSpan>
                  <FlexBox gap="0.5rem">
                    <IconPolygonDown width="1rem" height="0.8rem" />
                    <GrayFontParagraph>18%</GrayFontParagraph>
                  </FlexBox>
                </FlexBox>
              </NumberStatusBox>
            ))}
          </NumberStatusSection>
          <ChartSection>{/* TODO: chart.js */}</ChartSection>
        </CardLayoutSection>
      </IntegratedAdStatusSection>
    </MainHeaderLayout>
  );
};

export default Dashboard;

const DashboardTitleSection = styled.section`
  padding: 2.5rem 0;
`;

const IntegratedAdStatusSection = styled.section`
  ${FlexStyle}
`;

const NumberStatusSection = styled.section`
  ${FlexStyle}
  flex-wrap: wrap;
`;
const ChartSection = styled.section``;

const NumberStatusBox = styled.div`
  ${FlexStyle}
  width: 30.4rem;
  padding: 1.8rem 4rem;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: 10px;
`;

const StatusValueSpan = styled.span`
  font-weight: 700;
  font-size: 1.6rem;
`;

const IntegratedAdStatusH3 = styled.h3`
  font-size: 1.6rem;
`;

const StatueTitleH3 = styled.h3`
  color: #94a2ad;
  font-size: 1.2rem;
  font-weight: 500;
`;
const ArrowIconBox = styled.div``;
const IncreaseDecreaseValueSpan = styled.span``;
