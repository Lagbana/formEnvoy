import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppText } from './AppText';
import { Text } from 'react-native';

configure({ adapter: new Adapter() })

test('<AppText /> renders empty string correctly', () => {
  const component = shallow(
    <AppText children={''} />
  )
  expect(toJson(component)).toMatchSnapshot()
})

test('<AppText /> renders html correctly', () => {
  const component = shallow(
    <AppText children={'<bold>Some bold text</bold>'} />
  )
  expect(toJson(component)).toMatchSnapshot()
})

test('<AppText /> renders null correctly', () => {
  const component = shallow(
    <AppText children={null} />
  )
  expect(toJson(component)).toMatchSnapshot()
})

test('<AppText /> renders undefined correctly', () => {
  const component = shallow(
    <AppText children={undefined} />
  )
  expect(toJson(component)).toMatchSnapshot()
})

test('<AppText /> renders child components correctly correctly', () => {
  const component = shallow(
    <AppText children={<Text>My child</Text>} />
  )
  expect(toJson(component)).toMatchSnapshot()
})

