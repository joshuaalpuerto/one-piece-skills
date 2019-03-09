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

const InputWrapper = styled.div`
  flex: 1 30%;
`

const ExperienceWrapper = styled.div`
  flex: 1 20%;
  margin: 0px 20px;
`

const ButtonWrapper = styled.div`
  flex: 1 15%;
`

const FormWrapper = styled.form`
  display: flex;
  margin: 20px 0px;
  flex-flow: row wrap;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    ${/* sc-custom 'h1' */ InputWrapper} {
      flex: 1 100%;
      margin-bottom: 20px;
    }

    ${/* sc-custom 'h2' */ ExperienceWrapper} {
      flex: 1 30%;
      margin: 0 20px 0 0;
    }

    ${/* sc-custom 'h3' */ ButtonWrapper} {
      flex: 1;
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
export class Form extends React.PureComponent {
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
