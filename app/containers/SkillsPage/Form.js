import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'

import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'

import Experience from './Experience'
import messages from './messages'
import { EXPERIENCES } from './constants'

const FormWrapper = styled.form`
  display: flex;
  margin: 20px 0px;
  flex-flow: row wrap;
  justify-content: space-around;
`
const InputWrapper = styled.div`
  flex: 1 40%;
`

const ExperienceWrapper = styled.div`
  flex: 1 30%;
  margin: 0px 10px;
`

const ButtonWrapper = styled.div`
  flex: 1 25%;
`

/* eslint-disable react/prefer-stateless-function */
class Form extends React.PureComponent {
  state = {
    name: null,
    experience: null
  }

  onInputChange = evt => {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { intl } = this.props

    return (
      <FormWrapper onSubmit={this.onSubmit}>
        <InputWrapper>
          <Input
            minLength={4}
            maxLength={255}
            placeholder={intl.formatMessage(messages.inputPlaceholder)}
            name="name"
            onChange={this.onInputChange}
            required
          />
        </InputWrapper>
        <ExperienceWrapper>
          <Select
            name="experience"
            onChange={this.onInputChange}
            defaultValue=""
            required
          >
            <Experience
              id=""
              disabled
              label={intl.formatMessage(messages.selectPlaceholder)}
            />
            {EXPERIENCES.map(experience => (
              <Experience key={experience.id} {...experience} />
            ))}
          </Select>
        </ExperienceWrapper>
        <ButtonWrapper>
          <Button>
            <FormattedMessage {...messages.submit} />
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Form)
