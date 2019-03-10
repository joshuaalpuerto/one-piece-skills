import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import {
  GET_SKILLS,
  CREATE_SKILLS,
  DELETE_SKILLS,
  RESULT_SKILLS
} from './constants'

export const initialState = fromJS({
  skills: [],
  skillsLoader: false,
  skillsSuccess: false,
  skillsError: false
})

const skillsPageReducer = handleActions(
  {
    [GET_SKILLS]: state =>
      state
        .set('skillsLoader', true)
        .set('skillsSuccess', false)
        .set('skillsError', false),

    [CREATE_SKILLS]: state =>
      state
        .set('skillsLoader', true)
        .set('skillsSuccess', false)
        .set('skillsError', false),

    [DELETE_SKILLS]: state =>
      state
        .set('skillsLoader', true)
        .set('skillsSuccess', false)
        .set('skillsError', false),

    [RESULT_SKILLS]: {
      next: (state, action) =>
        state
          .set('skills', fromJS(action.payload))
          .set('skillsLoader', false)
          .set('skillsSuccess', true)
          .set('skillsError', false),
      throw: (state, action) =>
        state
          .set('skillsLoader', false)
          .set('skillsSuccess', false)
          .set('skillsError', action.payload.message)
    }
  },
  initialState
)

export default skillsPageReducer
