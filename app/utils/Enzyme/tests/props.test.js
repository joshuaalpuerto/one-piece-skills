import { values, all, equals } from 'ramda'
import { INTL_SHAPE, noop } from '../props'

describe('INTL_SHAPE', () => {
  it('all functions should have all noop functions', () => {
    const shapeValues = values(INTL_SHAPE)
    const allNoop = all(equals(noop))
    expect(allNoop(shapeValues)).toEqual(true)
  })
})
