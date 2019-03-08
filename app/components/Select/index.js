import React from 'react'
import PropTypes from 'prop-types'

function Select({ name, ...props }) {
  return <select name={name} {...props} />
}

Select.propTypes = {
  name: PropTypes.string.isRequired
}

export default Select
