import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IconPolygonDown, IconPolygonUp } from '../assets';
import LineChart from '../components/chart/LineChart';
import Datepicker from '../components/datepicker/ArrangeDatepicker';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';
import CustomSelect from '../components/select/CustomSelect';
import { CHART_OPTIONS } from '../constant/template';
import useAdStatus from '../hooks/useAdStatus';
import {
  filteredAdStatusListSelector,
  graphOptionsSelector,
} from '../recoil/dashboard';
import {
  CardLayoutSection,
  FlexBox,
  FlexStyle,
  GrayFontParagraph,
  PageTitleH2,
} from '../style/common.style';

const Dashboard = () => {
  const { adStatusList, setAdStatusList } = useAdStatus();
  const filteredAdStatusList = useRecoilValue(filteredAdStatusListSelector);

  const [graphOptions, setGraphOptions] = useRecoilState(graphOptionsSelector);
  const graphNextOptions = CHART_OPTIONS.filter(
    option => option.value !== graphOptions[0]
  );

  return (
    <MainHeaderLayout>
      <DashboardTitleSection justifyContent="space-between" alignItems="center">
        <PageTitleH2>대시보드</PageTitleH2>
        <Datepicker
          adStatusList={adStatusList}
          setAdStatusList={setAdStatusList}
        />
      </DashboardTitleSection>
      <IntegratedAdStatusSection flexDirection="column" gap="2rem">
        <IntegratedAdStatusH3>통합 광고 현황</IntegratedAdStatusH3>
        <CardLayoutSection>
          <NumberStatusSection gap="2rem">
            {filteredAdStatusList.map(adStatusItem => (
              <NumberStatusBox flexDirection="column" gap="1rem">
                <StatueTitleH3>{adStatusItem.name}</StatueTitleH3>
                <FlexBox justifyContent="space-between">
                  <StatusValueSpan>
                    {adStatusItem.currSum}
                    {adStatusItem.unit}
                  </StatusValueSpan>
                  <FlexBox gap="0.5rem">
                    {adStatusItem.isDecreased ? (
                      <IconPolygonDown width="1rem" height="0.8rem" />
                    ) : (
                      <IconPolygonUp width="1rem" height="0.8rem" />
                    )}
                    <GrayFontParagraph>
                      {adStatusItem.variations}
                      {adStatusItem.unit}
                    </GrayFontParagraph>
                  </FlexBox>
                </FlexBox>
              </NumberStatusBox>
            ))}
          </NumberStatusSection>
          <ChartSection>
            <FlexBox gap="1rem" margin="4rem 0">
              <CustomSelect
                placeholder="옵션1"
                options={CHART_OPTIONS}
                defaultValue={CHART_OPTIONS.find(
                  option => option.value === graphOptions[0]
                )}
                onChange={option => {
                  const temp = [...graphOptions];
                  temp.splice(0, 1, option.value);
                  setGraphOptions(temp);
                }}
                isLightFont
              />
              <CustomSelect
                placeholder="옵션2"
                options={graphNextOptions}
                value={
                  graphNextOptions.find(
                    option => option.value === graphOptions[1]
                  ) || ''
                }
                onChange={option => {
                  const temp = [...graphOptions];
                  temp.splice(1, 1, option.value);
                  setGraphOptions(temp);
                }}
                isLightFont
              />
            </FlexBox>
            <LineChart />
          </ChartSection>
        </CardLayoutSection>
      </IntegratedAdStatusSection>
    </MainHeaderLayout>
  );
};

export default Dashboard;

const DashboardTitleSection = styled.section`
  ${FlexStyle}
  padding: 2.5rem 0;
`;

const IntegratedAdStatusSection = styled.section`
  ${FlexStyle}
`;

const NumberStatusSection = styled.section`
  ${FlexStyle}
  flex-wrap: wrap;
`;

const OptionSection = styled.section``;

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
