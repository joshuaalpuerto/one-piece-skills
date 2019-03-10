import { createActions } from 'redux-actions'

import {
  GET_SKILLS,
  DELETE_SKILLS,
  CREATE_SKILLS,
  RESULT_SKILLS
} from './constants'

const ReduxActions = createActions(
  {},
  GET_SKILLS,
  DELETE_SKILLS,
  CREATE_SKILLS,
  RESULT_SKILLS
)

export const { getSkills, createSkills, deleteSkills, resultSkills } = {
  getSkills: ReduxActions['app/skillsPage/getSkills'],
  deleteSkills: ReduxActions['app/skillsPage/deleteSkills'],
  createSkills: ReduxActions['app/skillsPage/createSkills'],
  resultSkills: ReduxActions['app/skillsPage/resultSkills']
}
