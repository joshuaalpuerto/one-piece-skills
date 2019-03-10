import React from 'react'
import PropTypes from 'prop-types'
import { IdWrapper, ContentWrapper, Remove, Wrapper } from './styled'

/**
 * Make renderDelete available for them to customize or not to provide just for display
 * @param {*} param0
 */
function Card({ id, color, heading, subheading, renderDelete }) {
  return (
    <Wrapper>
      <IdWrapper bgColor={color}>{id}</IdWrapper>
      <ContentWrapper>
        {heading}
        {subheading && <span> {subheading} </span>}
      </ContentWrapper>
      <Remove>{renderDelete && renderDelete()}</Remove>
    </Wrapper>
  )
}

Card.defaultProps = {
  color: '#80878B',
  renderDelete: null
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  heading: PropTypes.string.isRequired,
  renderDelete: PropTypes.func,
  subheading: PropTypes.string,
  color: PropTypes.string
}

export default Card
