import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from '../index'

describe('<Input />', () => {
  it('should render a prop', () => {
    const id = 'testId'
    const renderedComponent = shallow(<Input name="test" id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should render input inside', () => {
    const renderedComponent = mount(<Input name="test" />)
    expect(renderedComponent.find('input').length).toEqual(1)
  })
})
