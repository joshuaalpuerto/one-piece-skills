import React from 'react'
import { shallow, mount } from 'enzyme'

import Experience from '../Experience'

const wrapper = (props = {}, enzyme = shallow) =>
  enzyme(<Experience {...props} />)

describe('<Experience />', () => {
  // Please check https://github.com/ag-grid/ag-grid-react for props
  const minProps = {
    id: '1 year',
    label: '< 1 year'
  }

  it('Should render option inside', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find('option').exists()).toEqual(true)
  })
})
