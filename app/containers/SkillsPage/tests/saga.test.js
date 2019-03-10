import { put, select } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { resultSkills } from '../actions'
import { selectSkills } from '../selectors'

import skillsPageSaga, {
  getSkillsSaga,
  getSkills,
  getResult,
  createSkillsSaga,
  createSkills
} from '../saga'

const skill = {
  name: 'React',
  experience: '<1 year'
}

const args = {
  payload: skill
}

describe('SkillsPage Saga', () => {
  describe('getSkillsSaga', () => {
    beforeEach(() => {
      const generator = getSkillsSaga()
      const latest = generator.next().value
      expect(latest).toMatchSnapshot()
    })

    describe('getSkills [SUCCESS]', () => {
      const generator = getSkills()

      it('should request call to API', () => {
        const call = generator.next().value
        expect(call).toMatchSnapshot()
      })

      it('should set resultRegistration', () => {
        const skills = []
        const callAction = generator.next(skills).value
        expect(callAction).toEqual(getResult(skills))
      })
    })

    describe('getSkills [FAIL]', () => {
      const generator = getSkills(args)

      it('should request call to API', () => {
        const call = generator.next().value
        expect(call).toMatchSnapshot()
      })

      it('should throw error resultSkills', () => {
        const error = new Error()
        const response = {
          response: {
            json() {}
          }
        }
        // eslint-disable-next-line no-unused-vars
        const throwAction = generator.throw(response).value
        const callAction = generator.next(response).value
        expect(callAction).toEqual(put(resultSkills(error)))
      })
    })
  })

  describe('createSkillsSaga', () => {
    beforeEach(() => {
      const generator = createSkillsSaga()
      const latest = generator.next().value
      expect(latest).toMatchSnapshot()
    })

    describe('createSkills [SUCCESS]', () => {
      const generator = createSkills(args)

      it('should request call to API', () => {
        const call = generator.next().value
        expect(call).toMatchSnapshot()
      })

      it('should get skills from selector', () => {
        const selector = generator.next(skill).value

        expect(JSON.stringify(selector)).toEqual(
          JSON.stringify(select(selectSkills()))
        )
      })

      it('should return updated skill list', () => {
        const skills = fromJS([])
        const result = generator.next(skills).value
        expect(result).toEqual(getResult([skill]))
      })
    })

    describe('createSkills [FAIL]', () => {
      const generator = createSkills(args)

      it('should request call to API', () => {
        const call = generator.next().value
        expect(call).toMatchSnapshot()
      })

      it('should throw error resultSkills', () => {
        const error = new Error()
        const response = {
          response: {
            json() {}
          }
        }
        // eslint-disable-next-line no-unused-vars
        const throwAction = generator.throw(response).value
        const callAction = generator.next(response).value
        expect(callAction).toEqual(put(resultSkills(error)))
      })
    })
  })

  describe('defaultGenerators', () => {
    const generators = skillsPageSaga()

    it('should have 2 watchers', () => {
      const watchers = generators.next().value
      expect(watchers.length).toEqual(2)
    })
  })
})
