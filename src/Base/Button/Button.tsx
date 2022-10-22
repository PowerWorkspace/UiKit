import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Button.scss'

export function Button ({children, color, theme, size, label } :InferProps<typeof Button.propTypes>) {
  return (
    <button
      type="button"
      className={[`App__${theme}`, 'Base__Button', `Base__Button--${size}`, `Base__Button--${color}`].join(' ')}
    >
      {label || children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['Default', 'Success', 'Warning', 'Alert']),
  theme: PropTypes.oneOf(['Light', 'Dark']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  label: PropTypes.string.isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'Default',
  theme: 'Light',
  size: 'Small'
}
