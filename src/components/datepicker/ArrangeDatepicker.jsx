import React from 'react';

import useDatepickerState from '../../hooks/useDatepickerState';
import { FlexBox } from '../../style/common.style';
import 'react-datepicker/dist/react-datepicker.css';
import { endDateAtom, startDateAtom } from '../../recoil/datepicker';
import ReactDatePicker from 'react-datepicker';

const ArrangeDatepicker = () => {
  const { date: startDate, onChange: onChangeStartDate } =
    useDatepickerState(startDateAtom);
  const { date: endDate, onChange: onChangeEndDate } =
    useDatepickerState(endDateAtom);

  return (
    <FlexBox>
      <ReactDatePicker
        selected={startDate}
        onChange={onChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <ReactDatePicker
        selected={endDate}
        onChange={onChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </FlexBox>
  );
};

export default ArrangeDatepicker;
