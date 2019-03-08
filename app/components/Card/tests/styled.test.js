/**
 * Testing our Modal component
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import {
  DeleteButton,
  IdWrapper,
  ContentWrapper,
  Remove,
  Wrapper
} from '../styled'

const children = 'Test'
const wrapper = (Component, props = {}, enzyme = shallow) =>
  enzyme(<Component {...props}>{children}</Component>)

describe('<Card /> Styled', () => {
  describe('<Wrapper />', () => {
    it('render without exploding', () => {
      const renderComponent = wrapper(Wrapper, {})
      expect(renderComponent.length).toEqual(1)
    })
  })

  describe('<Remove />', () => {
    it('render without exploding', () => {
      const renderComponent = wrapper(Remove, {})
      expect(renderComponent.length).toEqual(1)
    })
  })

  describe('<ContentWrapper />', () => {
    it('render without exploding', () => {
      const renderComponent = wrapper(ContentWrapper, {})
      expect(renderComponent.length).toEqual(1)
    })
  })

  describe('<IdWrapper />', () => {
    it('render without exploding', () => {
      const renderComponent = wrapper(IdWrapper, {})
      expect(renderComponent.length).toEqual(1)
    })

    it('should have display color passed', () => {
      const renderComponent = wrapper(IdWrapper, { bgColor: '#000' }, mount)
      expect(renderComponent).toMatchSnapshot()
      expect(renderComponent).toHaveStyleRule('background-color', '#000')
    })
  })

  describe('<DeleteButton />', () => {
    it('render without exploding', () => {
      const renderComponent = wrapper(DeleteButton, {})
      expect(renderComponent.length).toEqual(1)
    })
  })
})
