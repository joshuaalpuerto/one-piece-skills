import React from 'react'
import { shallow, mount } from 'enzyme'

import { INTL_SHAPE } from 'utils/Enzyme/props'

import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'

import { Form } from '../Form'

const wrapper = (props = {}, enzyme = shallow) => enzyme(<Form {...props} />)

describe('<Form />', () => {
  const minProps = {
    intl: INTL_SHAPE,
    onSubmit: () => {}
  }

  it('Should render Input', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Input).exists()).toEqual(true)
  })

  it('Should render Select', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Select).exists()).toEqual(true)
  })

  it('Should render Button', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Button).exists()).toEqual(true)
  })

  describe('State change', () => {
    it('Should update change when input is changed', () => {
      const renderComponent = wrapper(minProps, mount)
      renderComponent
        .find(Input)
        .simulate('change', { target: { value: 'React', name: 'name' } })
      expect(renderComponent.state().name).toEqual('React')
    })

    it('Should update change when select is changed', () => {
      const renderComponent = wrapper(minProps, mount)
      renderComponent.find(Select).simulate('change', {
        target: { value: '<1 year', name: 'experience' }
      })
      expect(renderComponent.state().experience).toEqual('<1 year')
    })
  })

  it('Should have called onSubmit props when form is submitted', () => {
    const props = {
      ...minProps,
      onSubmit: jest.fn()
    }
    const renderComponent = wrapper(props, mount)
    renderComponent.find('form').simulate('submit')
    expect(props.onSubmit).toHaveBeenCalled()
  })
})
