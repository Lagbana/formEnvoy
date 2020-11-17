import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppMapMarker } from '.'

configure({ adapter: new Adapter() })

test('<AppMapMarker /> renders correctly', () => {
  const component = shallow(
    <AppMapMarker coordinate={{ latitude: 0, longitude: 0 }} />
  )
  expect(toJson(component)).toMatchSnapshot()
})
