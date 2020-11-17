import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppSelectListItem } from './AppSelectListItem'

configure({ adapter: new Adapter() })

test('<AppSelectListItem /> renders correctly', () => {
  const component = shallow(
    <AppSelectListItem
      selected={true}
			item={{ Id: 100, Name: 'selected item', Value: 100 }}
			key={'Test Key'}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
