import { getSkills, createSkills, resultSkills } from '../actions'

import { GET_SKILLS, CREATE_SKILLS, RESULT_SKILLS } from '../constants'

describe('Skills Page Actions', () => {
  it('It should getSkills', () => {
    const payload = {}
    const expected = {
      type: GET_SKILLS,
      payload
    }
    expect(getSkills(payload)).toEqual(expected)
  })

  it('should set createSkills', () => {
    const payload = { name: 'React', experience: 1 }
    const expected = {
      type: CREATE_SKILLS,
      payload
    }
    expect(createSkills(payload)).toEqual(expected)
  })

  it('should set resultSkills', () => {
    const payload = [{ name: 'React', experience: 1 }]
    const expected = {
      type: RESULT_SKILLS,
      payload
    }
    expect(resultSkills(payload)).toEqual(expected)
  })
})
