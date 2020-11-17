import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppRadioButton } from '.'

configure({ adapter: new Adapter() })

jest.mock('@react-navigation/native')

test('<AppRadioButton /> renders correctly', () => {
  const component = shallow(
    <AppRadioButton
			options={[]}
			onSelect={() => {}}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
