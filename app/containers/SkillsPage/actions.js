import { createActions } from 'redux-actions'

import { GET_SKILLS, CREATE_SKILLS, RESULT_SKILLS } from './constants'

const ReduxActions = createActions({}, GET_SKILLS, CREATE_SKILLS, RESULT_SKILLS)

export const { getSkills, createSkills, resultSkills } = {
  getSkills: ReduxActions['app/skillsPage/getSkills'],
  createSkills: ReduxActions['app/skillsPage/createSkills'],
  resultSkills: ReduxActions['app/skillsPage/resultSkills']
}
