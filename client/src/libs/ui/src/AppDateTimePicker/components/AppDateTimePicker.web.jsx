/* Date input with date picker
=============================== */

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // TODO: include this stylesheet on web build
import { Typography, Layouts, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppDateTimePickerProps } from '../AppDateTimePicker.interface';
import moment from 'moment';
import { AppInput } from '../../AppInput';
import { AppIcon } from '../../AppIcon';
import { useTranslations } from '../../useTranslations';

export const AppDateTimePicker: React.FC<AppDateTimePickerProps> = ({
  value,
  onChange,
  onBlur,
  minimumDate,
  maximumDate,
  error,
  style,
  ...touchableOpacityProps
}) => {
  // vars

  const { translate } = useTranslations();
  const [pickerVisible, setPickerVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: '100%',
      zIndex: 1,
      padding: 20,
      backgroundColor: Colors.white,
      borderRadius: 15,
      marginBottom: 5,
      ...Layouts.bigShadow,
    },
    close: {
      position: 'absolute',
      top: 0,
      right: 20,
      padding: 8,
      backgroundColor: Colors.white,
      borderRadius: 999,
      transform: [{ translateY: -20 }],
      zIndex: 2,
    },
    closeIcon: {
      width: 24,
      height: 24,
      color: Colors.purple,
    },
    closeLink: {
      ...Typography.bodyXsmall,
      paddingTop: 10,
      marginHorizontal: 'auto',
      marginBottom: -5,
      color: Colors.purple,
    },
  });

  const toggleDatePicker = () => {
    setPickerVisible(!pickerVisible);
  };

  const handleChange = (date) => {
    if (onChange) {
      onChange(date);
    }
    if (onBlur) {
      onBlur(true, date);
    } // TODO: should true be first parameter?
    toggleDatePicker();
  };

  const handleClose = () => {
    if (onBlur) {
      onBlur(true, value);
    } // TODO: should true be first parameter?
    toggleDatePicker();
  };

  return (
    <View>
      {pickerVisible && (
        <View style={[styles.container, style]}>
          <View style={styles.close}>
            <TouchableOpacity onPress={handleClose}>
              <AppIcon name="x" size={24} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <DatePicker
            selected={value}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            inline
          />
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.closeLink}>{translate('label.cancel')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {/*<input type=:"date" ref={dateInput} onChange={e => setPickerValue(e.target.value)} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />*/}
      {/*<DateTimePickerModal isDarkModeEnabled={colorScheme === 'dark'} isVisible={pickerVisible} date={pickerValue} mode='date' onConfirm={handleConfirm} onCancel={hideDatePicker} minimumDate={minimumDate} maximumDate={maximumDate} /> */}
      <TouchableOpacity onPress={toggleDatePicker} {...touchableOpacityProps}>
        <AppInput
          icon="calendar"
          value={moment(value).format('MMMM D, YYYY')}
          editable={false}
          error={error}
        />
      </TouchableOpacity>
    </View>
  );
};
