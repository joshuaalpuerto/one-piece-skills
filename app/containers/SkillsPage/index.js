import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'

import injectReducer from 'utils/injectReducer'
import H3 from 'components/H3'

import Form from './Form'
import Skills from './Skills'
import reducer from './reducer'
import messages from './messages'

const Wrapper = styled.section`
  margin: 20px 0;
`

/* eslint-disable react/prefer-stateless-function */
export class SkillsPage extends React.PureComponent {
  onSubmit = () => {}

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Add skills</title>
          <meta name="description" content="Add skills page" />
        </Helmet>
        <H3>
          <FormattedMessage {...messages.header} />
        </H3>
        <Form onSubmit={this.onSubmit} />
        <Skills skills={[]} />
      </Wrapper>
    )
  }
}

SkillsPage.propTypes = {}

const withConnect = connect(
  null,
  null
)

const withReducer = injectReducer({ key: 'skillsPage', reducer })

export default compose(
  withReducer,
  withConnect
)(SkillsPage)
