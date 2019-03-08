import React from 'react'
import { shallow } from 'enzyme'

import Select from '../index'

describe('<Select />', () => {
  it('should render a prop', () => {
    const id = 'testId'
    const renderedComponent = shallow(<Select name="test" id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should render select inside', () => {
    const renderedComponent = shallow(<Select name="test" />)
    expect(renderedComponent.find('select').length).toEqual(1)
  })

  it('should render options select inside', () => {
    const renderedComponent = shallow(
      <Select name="test">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
    )
    expect(renderedComponent.find('option').length).toEqual(4)
  })

  it('should render value simulate change and should have value', () => {
    const renderedComponent = shallow(
      <Select name="test">
        <option value="volvo" selected>
          Volvo
        </option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
    )

    expect(renderedComponent.find('option[selected]').props().value).toBe(
      'volvo'
    )
  })
})
