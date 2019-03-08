import { fromJS } from 'immutable'

import {
  selectSkills,
  selectSkillsLoader,
  selectSkillsSuccess,
  selectSkillsError
} from '../selectors'

describe('Skills Page Selectors', () => {
  it('should select selectSkills', () => {
    const selectSkillsSelector = selectSkills()

    const skills = fromJS([])
    const mockedState = fromJS({
      skillsPage: {
        skills
      }
    })
    expect(selectSkillsSelector(mockedState)).toEqual(skills)
  })

  it('should select selectSkillsLoader', () => {
    const selectSkillsLoaderSelector = selectSkillsLoader()

    const skillsLoader = true
    const mockedState = fromJS({
      skillsPage: {
        skillsLoader
      }
    })
    expect(selectSkillsLoaderSelector(mockedState)).toEqual(skillsLoader)
  })

  it('should select selectSkillsSuccess', () => {
    const selectSkillsSuccessSelector = selectSkillsSuccess()

    const skillsSuccess = true
    const mockedState = fromJS({
      skillsPage: {
        skillsSuccess
      }
    })
    expect(selectSkillsSuccessSelector(mockedState)).toEqual(skillsSuccess)
  })

  it('should select selectSkillsError', () => {
    const selectSkillsErrorSelector = selectSkillsError()

    const skillsError = false
    const mockedState = fromJS({
      skillsPage: {
        skillsError
      }
    })
    expect(selectSkillsErrorSelector(mockedState)).toEqual(skillsError)
  })
})
