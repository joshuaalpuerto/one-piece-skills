import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { always, gt, ifElse } from 'ramda'

import { toJS } from 'utils/Immutable'
import Card from 'components/Card'
import { DeleteButton } from 'components/Card/styled'

import messages from './messages'

const SkillsWrapper = styled.div`
  background-color: #eee;
  min-height: 10vh;
`

const EmptySkills = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
`

export const Empty = () => (
  <EmptySkills>
    <FormattedMessage {...messages.emptySkills} />
  </EmptySkills>
)
const colorIdentifier = ifElse(gt(5), always('#24333C'), always(null))
/* eslint-disable react/prefer-stateless-function */
const Skills = ({ skills, onDelete }) => (
  <SkillsWrapper>
    {skills.length === 0 ? (
      <Empty />
    ) : (
      skills.map(({ id, name, experience }, idx) => (
        <Card
          key={id}
          id={id}
          heading={name}
          subheading={experience}
          color={colorIdentifier(idx)}
          renderDelete={() => <DeleteButton onClick={() => onDelete(id)} />}
        />
      ))
    )}
  </SkillsWrapper>
)

Skills.propTypes = {
  skills: PropTypes.array,
  onDelete: PropTypes.func
}

/**
 * We dont want dumb component
 * to have dependencies  to immutable
 * We also don't wnant to call`toJS` to object always since this will cause performance issue
 * so we  wrap it to HOC
 * issue: https://github.com/react-boilerplate/react-boilerplate/issues/2469
 */
export default toJS(Skills)
