import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppTagList } from './AppTagList'

configure({ adapter: new Adapter() })

test('<AppTagList /> renders correctly', () => {
  const component = shallow(
    <AppTagList tags={[{ label: 'test label', value: 0 }]} />
  )
  expect(toJson(component)).toMatchSnapshot()
})
