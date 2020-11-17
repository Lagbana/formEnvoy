import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppSelect } from '.'

configure({ adapter: new Adapter() })

test('<AppSelect /> renders correctly', () => {
  const component = shallow(
    <AppSelect
      keyExtractor={() => ''}
      items={[{ Id: '', Name: '', Value: '' }]}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
