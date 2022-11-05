import React from 'react';
import styled from 'styled-components';
import { IconAlarm, IconProfile, IconSetting } from '../../assets';
import { FlexBox, FlexStyle } from '../../style/common.style';

const MainHeader = () => {
  return (
    <RootMainHeaderLayout>
      <FlexBox justifyContent="flex-end" alignItems="center" gap="3rem">
        <IconAlarm width="2rem" height="2.2rem" />
        <IconSetting width="2.4rem" height="2.4rem" />
        <FlexBox alignItems="center" gap="1rem">
          <ProfileIconBox justifyContent="cetner" alignItems="center">
            <IconProfile />
          </ProfileIconBox>
          <NicknameSpan>원티드님</NicknameSpan>
        </FlexBox>
      </FlexBox>
    </RootMainHeaderLayout>
  );
};

export default MainHeader;

const RootMainHeaderLayout = styled.header`
  padding: 2.9rem 0;
`;

const ProfileIconBox = styled.div`
  ${FlexStyle}
  width: 4rem;
  height: 4rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid #d1d8dc;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.BORDER_GRAY};

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const NicknameSpan = styled.span`
  font-size: 1.4rem;
`;
