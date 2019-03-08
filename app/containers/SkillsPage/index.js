import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'

import injectReducer from 'utils/injectReducer'

import reducer from './reducer'

/* eslint-disable react/prefer-stateless-function */
export class SkillsPage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Add skills</title>
          <meta name="description" content="Add skills page" />
        </Helmet>
        <div />
      </article>
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
