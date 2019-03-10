import React from 'react'
import { fromJS } from 'immutable'

import { shallow } from 'enzyme'

import { toJS, isImmutable } from '../index'

const ExampleComponent = props => <div {...props}> Hello world </div>

describe('<toJS />', () => {
  const minProps = {
    testProps: fromJS([])
  }

  it('Render <ExampleComponent /> testProps should be immutable', () => {
    const renderComponent = shallow(<ExampleComponent {...minProps} />)
    const testProps = renderComponent.props().testProps
    expect(isImmutable(testProps)).toEqual(true)
  })

  it('Render <ExampleComponent /> testProps should be be plain object', () => {
    const HOC = toJS(ExampleComponent)
    const renderComponent = shallow(<HOC {...minProps} />)
    const testProps = renderComponent.props().testProps
    expect(testProps).toEqual([])
  })
})
