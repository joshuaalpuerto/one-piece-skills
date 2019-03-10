import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import H3 from 'components/H3'
import LoadingIndicator from 'components/LoadingIndicator'

import Form from './Form'
import Skills from './Skills'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

import { getSkills, createSkills } from './actions'
import { selectSkills, selectSkillsLoader } from './selectors'

const Wrapper = styled.section`
  margin: 20px 0;
`

/* eslint-disable react/prefer-stateless-function */
export class SkillsPage extends React.PureComponent {
  componentDidMount() {
    this.props.getSkills()
  }

  onSubmit = values => {
    this.props.createSkills(values)
  }

  render() {
    const { skills, skillsLoader } = this.props
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
        {skillsLoader ? <LoadingIndicator /> : <Skills skills={skills} />}
      </Wrapper>
    )
  }
}

SkillsPage.propTypes = {
  getSkills: PropTypes.func.isRequired,
  createSkills: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  skillsLoader: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  skills: selectSkills(),
  skillsLoader: selectSkillsLoader()
})

export function mapDispatchToProps(dispatch) {
  return {
    getSkills: payload => dispatch(getSkills(payload)),
    createSkills: payload => dispatch(createSkills(payload)),
    dispatch
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'skillsPage', reducer })
const withSaga = injectSaga({ key: 'skillsPage', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SkillsPage)
