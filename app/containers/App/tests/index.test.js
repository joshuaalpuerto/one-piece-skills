import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

import Footer from 'components/Footer'
import App from '../index'

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />)
    expect(renderedComponent.find(Route)).not.toHaveLength(0)
  })

  it('should render the footer', () => {
    const renderedComponent = shallow(<App />)
    expect(renderedComponent.find(Footer)).toHaveLength(1)
  })
})
