/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSkillsDomain = state => state.get('skillsPage', initialState)

const selectSkills = () =>
  createSelector(selectSkillsDomain, subState => subState.get('skills'))

const selectSkillsLoader = () =>
  createSelector(selectSkillsDomain, subState => subState.get('skillsLoader'))

const selectSkillsSuccess = () =>
  createSelector(selectSkillsDomain, subState => subState.get('skillsSuccess'))

const selectSkillsError = () =>
  createSelector(selectSkillsDomain, subState => subState.get('skillsError'))

export {
  selectSkills,
  selectSkillsLoader,
  selectSkillsSuccess,
  selectSkillsError
}
