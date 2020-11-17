import React from 'react'
import { create, act } from 'react-test-renderer'
import { AppInput } from '.'

test('<AppInput /> renders correctly', () => {
  const component = create(<AppInput value={'Test 123'} />).toJSON()

  expect(component).toMatchSnapshot()
})
