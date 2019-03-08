/**
 * Test the UsersPage
 */

import React from 'react'
import { shallow } from 'enzyme'
import { SkillsPage } from '../index'

const wrapper = (props = {}, enzyme = shallow) =>
  enzyme(<SkillsPage {...props} />)

describe('<SkillsPage />', () => {
  const minProps = {}

  it('render without exploding', () => {
    const renderComponent = wrapper(minProps)
    expect(renderComponent.length).toEqual(1)
  })
})
