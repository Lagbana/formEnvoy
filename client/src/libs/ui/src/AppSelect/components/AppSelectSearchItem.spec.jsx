import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppSelectSearchItem } from './AppSelectSearchItem'

configure({ adapter: new Adapter() })

test('<AppSelectSearchItem /> renders correctly', () => {
  const component = shallow(
    <AppSelectSearchItem
      title={'Test title'}
      onBack={() => {}}
      onClose={() => {}}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
