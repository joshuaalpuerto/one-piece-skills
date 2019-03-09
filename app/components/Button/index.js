/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

import StyledButton from './StyledButton'

function Button({ onClick, children, ...props }) {
  return (
    <StyledButton onClick={props.onClick} {...props}>
      {Children.toArray(children)}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Button
