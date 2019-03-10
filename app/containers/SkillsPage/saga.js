import { takeLatest, call, put, all, fork, select } from 'redux-saga/effects'
import { concat, compose, isEmpty, when } from 'ramda'

import request from 'utils/request'

import { API_BASE_URL } from 'containers/App/constants'

import { GET_SKILLS, CREATE_SKILLS } from './constants'
import { resultSkills } from './actions'
import { selectSkills } from './selectors'

export function* getSkills() {
  try {
    const req = yield call(request, `${API_BASE_URL}/skills`, {
      method: 'GET'
    })

    const results = compose(
      put,
      resultSkills,
      when(isEmpty, [])
    )
    yield results(req)
  } catch (error) {
    const response = yield error.response.json()
    yield put(resultSkills(new Error(response.error)))
  }
}

export function* createSkills(args) {
  const { payload } = args
  try {
    const req = yield call(request, `${API_BASE_URL}/skills`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const skills = yield select(selectSkills())
    const results = compose(
      put,
      resultSkills,
      when(isEmpty, []),
      concat(skills.toJS())
    )
    yield results([req])
  } catch (error) {
    const response = yield error.response.json()
    yield put(resultSkills(new Error(response.error)))
  }
}

export function* getSkillsSaga() {
  yield takeLatest(GET_SKILLS, getSkills)
}

export function* createSkillsSaga() {
  yield takeLatest(CREATE_SKILLS, createSkills)
}

// All sagas to be loaded
export function* skillsPageSaga() {
  yield all([fork(getSkillsSaga), fork(createSkillsSaga)])
}

// All sagas to be loaded
export default skillsPageSaga
