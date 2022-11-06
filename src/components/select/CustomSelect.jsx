import React from 'react';
import Select from 'react-select';

const dot = color => ({
  display: 'flex',
  alignItems: 'center',
  ':before': color
    ? {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        width: 10,
        height: 10,
      }
    : '',
});

const getColourStyles = ({ padding, marginBottom, isLightFont }) => ({
  control: styles => ({
    ...styles,
    borderColor: '#EDEFF1',
    borderRadius: '10px',
    padding: padding || '',
    marginBottom: marginBottom,
  }),
  placeholder: styles => ({
    ...styles,
    color: '#3A474E',
    fontSize: isLightFont ? '1.4rem' : '1.6rem',
    fontWeight: isLightFont ? 400 : 600,
  }),
  option: styles => ({
    ...styles,
    color: '#3A474E',
    fontSize: isLightFont ? '1.4rem' : '1.6rem',
    fontWeight: isLightFont ? 400 : 600,
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: '#3A474E',
    fontSize: isLightFont ? '1.4rem' : '1.6rem',
    fontWeight: isLightFont ? 400 : 600,
    ...dot(data.color),
  }),
});

const CustomSelect = props => {
  const { padding, marginBottom, isLightFont, ...selectOptions } = props;
  const colourStyles = getColourStyles({ padding, marginBottom, isLightFont });

  return <Select {...selectOptions} styles={colourStyles} />;
};

export default CustomSelect;
