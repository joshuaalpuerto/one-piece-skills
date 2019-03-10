import { fromJS } from 'immutable'
import skillsPageReducer from '../reducer'
import { getSkills, createSkills, deleteSkills, resultSkills } from '../actions'

describe('skillsPageReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      skills: [],
      skillsLoader: false,
      skillsSuccess: false,
      skillsError: false
    })
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(skillsPageReducer(undefined, {})).toEqual(expectedResult)
  })

  it('Should load and reset success and error state', () => {
    const expectedResult = state
      .set('skillsLoader', true)
      .set('skillsSuccess', false)
      .set('skillsError', false)

    expect(skillsPageReducer(state, getSkills())).toEqual(expectedResult)
  })

  it('Should load and reset success and error state on creation', () => {
    const expectedResult = state
      .set('skillsLoader', true)
      .set('skillsSuccess', false)
      .set('skillsError', false)

    const payload = { name: 'React', experience: 1 }
    expect(skillsPageReducer(state, createSkills(payload))).toEqual(
      expectedResult
    )
  })

  it('Should load and reset success and error state on deletion', () => {
    const expectedResult = state
      .set('skillsLoader', true)
      .set('skillsSuccess', false)
      .set('skillsError', false)

    const payload = 1
    expect(skillsPageReducer(state, deleteSkills(payload))).toEqual(
      expectedResult
    )
  })

  describe('resultSkills', () => {
    it('Should stop loading and have skills value with success=true', () => {
      const payload = [{ name: 'React', experience: 1 }]
      const expectedResult = state
        .set('skills', fromJS(payload))
        .set('skillsLoader', false)
        .set('skillsSuccess', true)
        .set('skillsError', false)

      expect(skillsPageReducer(state, resultSkills(payload))).toEqual(
        expectedResult
      )
    })

    it('Should stop loading and success=false and error with message', () => {
      const error = 'Error'
      const expectedResult = state
        .set('skillsLoader', false)
        .set('skillsSuccess', false)
        .set('skillsError', error)

      expect(skillsPageReducer(state, resultSkills(new Error(error)))).toEqual(
        expectedResult
      )
    })
  })
})
