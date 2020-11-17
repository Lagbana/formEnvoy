import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppRadioButtonStandardOption } from './AppRadioButtonStandardOption'

configure({ adapter: new Adapter() })

test('<AppRadioButtonStandardOption /> renders correctly', () => {
  const component = shallow(
    <AppRadioButtonStandardOption
      animation={{ opacity: 100, translateY: 0 }}
      option={{ value: 0, label: 'test label' }}
      direction={'row'}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
