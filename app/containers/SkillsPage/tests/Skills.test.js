import React from 'react'
import { shallow, mount } from 'enzyme'

import Card from 'components/Card'
import Skills, { Empty } from '../Skills'

const wrapper = (props = {}, enzyme = shallow) => enzyme(<Skills {...props} />)

describe('<Skills />', () => {
  // Please check https://github.com/ag-grid/ag-grid-react for props
  const minProps = {
    skills: []
  }

  it('Render <Empty /> if no skills passed', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Empty).exists()).toEqual(true)
  })

  it('Render <Card /> if theres skill passed', () => {
    const props = {
      skills: [
        {
          id: 123,
          name: 'React',
          experience: '2 years'
        }
      ]
    }
    const renderComponent = wrapper(props, mount)
    expect(renderComponent.find(Card).exists()).toEqual(true)
  })

  it("Render no's of <Card /> same as skills passed", () => {
    const props = {
      skills: [
        {
          id: 123,
          name: 'React',
          experience: '2 years'
        },
        {
          id: 124,
          name: 'Express.js',
          experience: '4 years'
        }
      ]
    }
    const renderComponent = wrapper(props, mount)
    expect(renderComponent.find(Card).length).toEqual(2)
  })
})
