import React from 'react';
import styled from 'styled-components';

const MainHeader = () => {
  return (
    <RootMainHeaderLayout>
      <MainHeaderBox>
        <AlarmIconBox>{/* <img src={iconAlarm} alt="alarm" /> */}</AlarmIconBox>
        <SettingIconBox>
          {/* <img src={iconSetting} alt="setting" /> */}
        </SettingIconBox>
        <ProfileWrapperBox>
          <ProfileIconBox></ProfileIconBox>
          <NicknameSpan>원티드님</NicknameSpan>
        </ProfileWrapperBox>
      </MainHeaderBox>
    </RootMainHeaderLayout>
  );
};

export default MainHeader;

const RootMainHeaderLayout = styled.header``;

const MainHeaderBox = styled.div``;

const AlarmIconBox = styled.div``;

const SettingIconBox = styled.div``;

const ProfileWrapperBox = styled.div``;

const ProfileIconBox = styled.div``;

const NicknameSpan = styled.span``;
