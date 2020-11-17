/* Single checkbox
=============================== */

import React from 'react';
import {
  AppCheckbox,
  AppCheckboxProps,
	AppCheckboxOptionType,
} from '../AppCheckbox';



export const AppAgree = ({
	label,
  onSelect,
  value,
  ...props
}) => {

  const options = [
    {
      label,
      value: true
    },
  ];


  const handleSelect = (values) => {
		if (onSelect) {

			onSelect(values.includes(true));

		}
  };

  return (
    <AppCheckbox
      options={options}
      onSelect={handleSelect}
      value={value ? [options[0].value] : []}
      isHtml={true}
      {...props}
    />
  );
};

