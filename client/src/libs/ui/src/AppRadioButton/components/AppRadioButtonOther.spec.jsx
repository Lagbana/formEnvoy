import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppRadioButtonOtherOption } from './AppRadioButtonOtherOption'

configure({ adapter: new Adapter() })

test('<AppRadioButtonOtherOption /> renders correctly', () => {
  const component = shallow(
    <AppRadioButtonOtherOption
      animation={{ opacity: 100, translateY: 0 }}
      option={{ value: 0, label: 'test label', other: true }}
      direction={'row'}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
