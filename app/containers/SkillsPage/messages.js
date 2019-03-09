import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.containers.SkillsPage'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'ADD YOUR SKILLS'
  },
  inputPlaceholder: {
    id: `${scope}.inputPlaceholder`,
    defaultMessage: 'Nodejs, Postgres, React, etc.'
  },
  selectPlaceholder: {
    id: `${scope}.selectPlaceholder`,
    defaultMessage: 'Experience'
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'ADD SKILLS'
  }
})
