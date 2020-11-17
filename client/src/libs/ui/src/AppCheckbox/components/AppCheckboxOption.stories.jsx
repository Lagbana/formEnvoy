import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppCheckboxOption } from './AppCheckboxOption'
import { AppCheckboxOptionType } from '../AppCheckbox.interface'

const option: AppCheckboxOptionType<string> = {
  label: 'Option 1',
  value: 'option-1'
}

storiesOf('AppCheckboxOption', module)
  .add('Checked', () => (
    <AppCheckboxOption<string>
      option={option}
      onPress={option => {}}
      checked={true}
    />
  ))
  .add('Unchecked', () => (
    <AppCheckboxOption<string>
      option={option}
      onPress={option => {}}
      checked={false}
    />
  ))
  .add('Scheme: Light', () => (
    <AppCheckboxOption<string>
      scheme='light'
      option={option}
      onPress={option => {}}
    />
  ))
  .add('Scheme: Dark', () => (
    <AppCheckboxOption<string>
      scheme='dark'
      option={option}
      onPress={option => {}}
    />
  ))
  .add('isHtml: True', () => (
    <AppCheckboxOption<string>
      isHtml={true}
      option={option}
      onPress={option => {}}
    />
  ))
  .add('isHtml: False', () => (
    <AppCheckboxOption<string>
      isHtml={false}
      option={option}
      onPress={option => {}}
    />
  ))
  .add('Custom Layout', () => (
    <AppCheckboxOption<string>
      layout={{ checkboxSize: 30, fontSize: 30, spacing: 30 }}
      option={option}
      onPress={option => {}}
    />
  ))