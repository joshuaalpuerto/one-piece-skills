import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { toJS } from 'utils/Immutable'
import Card from 'components/Card'

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

/* eslint-disable react/prefer-stateless-function */
const Skills = ({ skills }) => (
  <SkillsWrapper>
    {skills.length === 0 ? (
      <Empty />
    ) : (
      skills.map(({ id, name, experience }) => (
        <Card key={id} id={id} heading={name} subheading={experience} />
      ))
    )}
  </SkillsWrapper>
)

Skills.propTypes = {
  skills: PropTypes.array
}

/**
 * We dont want dumb component
 * to have dependencies  to immutable
 * We also don't wnant to call`toJS` to object always since this will cause performance issue
 * so we  wrap it to HOC
 * issue: https://github.com/react-boilerplate/react-boilerplate/issues/2469
 */
export default toJS(Skills)
