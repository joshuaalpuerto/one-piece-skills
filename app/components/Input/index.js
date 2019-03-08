import React from 'react'
import PropTypes from 'prop-types'

function Input({ name, ...props }) {
  return <input name={name} {...props} />
}

Input.propTypes = {
  name: PropTypes.string.isRequired
}

export default Input
