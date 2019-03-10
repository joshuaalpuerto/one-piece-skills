import { takeLatest, call, put, fork, select } from 'redux-saga/effects'
import { concat, compose } from 'ramda'

import request from 'utils/request'

import { API_BASE_URL } from 'containers/App/constants'

import { GET_SKILLS, CREATE_SKILLS } from './constants'
import { resultSkills } from './actions'
import { selectSkills } from './selectors'

export const getResult = compose(
  put,
  resultSkills
)

export const updateSkills = skills => skill => concat(skills, [skill])

export function* getSkills() {
  try {
    const req = yield call(request, `${API_BASE_URL}/skills`, {
      method: 'GET'
    })

    yield getResult(req)
  } catch (error) {
    const response = yield error.response.json()
    yield getResult(new Error(response.error))
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
    const modified = updateSkills(skills.toJS())(req)
    yield getResult(modified)
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
  yield [fork(getSkillsSaga), fork(createSkillsSaga)]
}

// All sagas to be loaded
export default skillsPageSaga
