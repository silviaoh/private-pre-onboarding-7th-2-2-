import React from 'react';
import styled from 'styled-components';
import { iconPolygonDown } from '../assets';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';

const Dashboard = () => {
  return (
    <MainHeaderLayout>
      <DashboardTitleSection>
        <DashboardTitleH2>대시보드</DashboardTitleH2>
        {/* TODO: react-datepicker */}
      </DashboardTitleSection>
      <IntegratedAdStatusSection>
        <IntegratedAdStatusH3>통합 광고 현황</IntegratedAdStatusH3>
        <StatusCardSection>
          <NumberStatusSection>
            <NumberStatusBox>
              <StatueTitleH3>ROAS</StatueTitleH3>
              <FlexBox>
                <StatusValueSpan>697%</StatusValueSpan>
                <FlexBox>
                  <ArrowIconBox>
                    <img src={iconPolygonDown} alt="down" />
                  </ArrowIconBox>
                  <IncreaseDecreaseValueSpan></IncreaseDecreaseValueSpan>
                </FlexBox>
              </FlexBox>
            </NumberStatusBox>
          </NumberStatusSection>
          <ChartSection></ChartSection>
        </StatusCardSection>
      </IntegratedAdStatusSection>
    </MainHeaderLayout>
  );
};

export default Dashboard;

const DashboardTitleSection = styled.section``;

const IntegratedAdStatusSection = styled.section``;
const StatusCardSection = styled.section``;
const NumberStatusSection = styled.section``;
const ChartSection = styled.section``;

const NumberStatusBox = styled.div``;
const FlexBox = styled.div``;
const StatusValueSpan = styled.span``;

const DashboardTitleH2 = styled.h2``;
const IntegratedAdStatusH3 = styled.h3``;

const StatueTitleH3 = styled.h3``;
const ArrowIconBox = styled.div``;
const IncreaseDecreaseValueSpan = styled.span``;
