import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Card from 'components/Card'

import messages from './messages'

const SkillsWrapper = styled.div`
  background-color: #eee;
  min-height: 10vh;
  padding: 20px;
`

const EmptySkills = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
`

const Empty = () => (
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
        <Card id={id} heading={name} subheading={experience} />
      ))
    )}
  </SkillsWrapper>
)

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills
