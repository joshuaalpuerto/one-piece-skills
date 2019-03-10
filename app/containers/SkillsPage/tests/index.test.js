/**
 * Test the UsersPage
 */

import React from 'react'
import { shallow } from 'enzyme'
import { fromJS, mount } from 'immutable'

import LoadingIndicator from 'components/LoadingIndicator'

import Form from '../Form'
import Skills from '../Skills'
import { SkillsPage, mapDispatchToProps } from '../index'
import { getSkills, createSkills, deleteSkills } from '../actions'

const wrapper = (props = {}, enzyme = shallow) =>
  enzyme(<SkillsPage {...props} />)

describe('<SkillsPage />', () => {
  const minProps = {
    getSkills: () => {},
    createSkills: () => {},
    deleteSkills: () => {},
    skills: fromJS({}),
    skillsLoader: false
  }

  it('render Form', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Form).exists()).toEqual(true)
  })

  it('render Skills if not loading', () => {
    const renderComponent = wrapper(minProps, mount)
    expect(renderComponent.find(Skills).exists()).toEqual(true)
  })

  it('render LoadingIndicator if loading', () => {
    const renderComponent = wrapper(
      {
        ...minProps,
        skillsLoader: true
      },
      mount
    )
    expect(renderComponent.find(LoadingIndicator).exists()).toEqual(true)
  })

  describe('componentDidMount', () => {
    it('should trigger getSkills on mount', () => {
      const props = {
        ...minProps,
        getSkills: jest.fn()
      }
      const renderComponent = wrapper(props)
      const component = renderComponent.instance()
      component.componentDidMount()
      expect(component.props.getSkills).toBeCalled()
    })
  })

  describe('onSubmit', () => {
    it('should trigger createSkills on mount', () => {
      const props = {
        ...minProps,
        createSkills: jest.fn()
      }
      const renderComponent = wrapper(props)
      const component = renderComponent.instance()
      component.onSubmit()
      expect(component.props.createSkills).toBeCalled()
    })
  })

  describe('onDelete', () => {
    it('should trigger deleteSkills on mount', () => {
      const props = {
        ...minProps,
        deleteSkills: jest.fn()
      }
      const renderComponent = wrapper(props)
      const component = renderComponent.instance()
      component.onDelete()
      expect(component.props.deleteSkills).toBeCalled()
    })
  })

  describe('getSkills', () => {
    it('should be injected', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      expect(result.getSkills).toBeDefined()
    })

    it('should dispatch getSkills when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      const payload = {}
      result.getSkills(payload)
      expect(dispatch).toHaveBeenCalledWith(getSkills(payload))
    })
  })

  describe('createSkills', () => {
    it('should be injected', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      expect(result.createSkills).toBeDefined()
    })

    it('should dispatch createSkills when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      const payload = {}
      result.createSkills(payload)
      expect(dispatch).toHaveBeenCalledWith(createSkills(payload))
    })
  })

  describe('deleteSkills', () => {
    it('should be injected', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      expect(result.deleteSkills).toBeDefined()
    })

    it('should dispatch deleteSkills when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      const payload = {}
      result.deleteSkills(payload)
      expect(dispatch).toHaveBeenCalledWith(deleteSkills(payload))
    })
  })
})
