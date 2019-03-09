/**
 * Testing our Button component
 */

import React from 'react'
import { mount } from 'enzyme'

import Button from '../index'
const children = <h1>Test</h1>
const renderComponent = (props = {}) =>
  mount(<Button {...props}>{children}</Button>)

describe('<Button />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })

  it('should not adopt type attribute when rendering a button', () => {
    const type = 'submit'
    const renderedComponent = renderComponent({ onChange: () => {}, type })
    expect(renderedComponent.find('button').prop('type')).toBeDefined()
  })
})
