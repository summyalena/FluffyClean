import React from 'react'
import { PropTypes } from 'react';

function Button({children, type, isDisabled}) {
  return (
    <Button type={type} isDisabled={isDisabled}>
     {children}
    </Button>
  )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.String,
    isDisabled: false,
}

export default Button