import React from 'react'
import { mount } from 'enzyme'

import 'jest-styled-components'

import Card from '../index'
import { IdWrapper, ContentWrapper, Remove } from '../styled'

describe('<Card />', () => {
  describe('<IdWrapper />', () => {
    const props = {
      id: 1,
      heading: 'React',
      subheading: '1 year'
    }

    it('should be background default #000', () => {
      const renderedComponent = mount(<Card {...props} />)
      const instance = renderedComponent.find(IdWrapper)

      expect(instance).toMatchSnapshot()
      expect(instance).toHaveStyleRule('background-color', '#000')
    })

    it('should have different background color if passes as prop', () => {
      const subProps = {
        ...props,
        color: 'lightgreen'
      }
      const renderedComponent = mount(<Card {...subProps} />)
      const instance = renderedComponent.find(IdWrapper)

      expect(instance).toMatchSnapshot()
      expect(instance).toHaveStyleRule('background-color', 'lightgreen')
    })

    it('should have id existing', () => {
      const renderedComponent = mount(<Card {...props} />)
      const instance = renderedComponent.find(IdWrapper)
      expect(instance.text()).toEqual('1')
    })
  })

  describe('<ContentWrapper />', () => {
    const props = {
      id: 1,
      heading: 'React',
      subheading: '1 year'
    }

    it('should exist', () => {
      const renderedComponent = mount(<Card {...props} />)
      const instance = renderedComponent.find(ContentWrapper)
      expect(instance.length).toEqual(1)
    })

    it('should not render span if subheading is null', () => {
      const subProps = {
        ...props,
        subheading: null
      }
      const renderedComponent = mount(<Card {...subProps} />)
      const wrapper = renderedComponent.find(ContentWrapper)
      const span = wrapper.find('span')
      expect(span.exists()).toEqual(false)
    })
  })

  describe('<Remove />', () => {
    const props = {
      id: 1,
      heading: 'React',
      subheading: '1 year'
    }

    it('should exist', () => {
      const renderedComponent = mount(<Card {...props} />)
      const instance = renderedComponent.find(Remove)
      expect(instance.length).toEqual(1)
    })

    it('should render nothing when renderDelete is null', () => {
      const renderedComponent = mount(<Card {...props} />)
      const instance = renderedComponent.find(Remove)
      expect(instance.text()).toEqual('')
    })

    it('should render  renderDelete if Exist', () => {
      const DeleteComponent = () => <div> Remove </div>
      const subProps = {
        ...props,
        renderDelete: DeleteComponent
      }
      const renderedComponent = mount(<Card {...subProps} />)
      const instance = renderedComponent.find(Remove)

      expect(instance.equals(<Remove>{DeleteComponent()}</Remove>)).toEqual(
        true
      )
    })
  })
})
