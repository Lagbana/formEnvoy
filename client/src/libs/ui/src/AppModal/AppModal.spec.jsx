import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppModal } from '.'

configure({ adapter: new Adapter() })

test('<AppModal /> renders correctly', () => {
  const component = shallow(
    <AppModal
			animationType="slide"
			visible={true}
			presentationStyle="pageSheet"
			onShow={() => null}
			onDismiss={() => null}
			onRequestClose={() => {}}
    />
  )
  expect(toJson(component)).toMatchSnapshot()
})
