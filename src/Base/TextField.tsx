// @ts-nocheck

import React, { forwardRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

const TextFieldElement = styled.input`
  transition: all 0.1s ease-in-out;
  padding: 2px 5px;
  outline: none;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 9pt;
  border: ${props => props.invalid ? 'rgba(255,129,129,0.8)' : props.theme.borderColor} solid 1.3px;
  border-radius: 300px;
  background-color: ${props => props.theme.backgroundColor};

  :focus-within {
    box-shadow: ${props => props.invalid ? 'rgba(248,85,85,0.5)' : props.theme.outlineColor} 0 0 0 0.2em;
  }

  :disabled {
    opacity: 0.6;
  }
`

const lightTheme = {
  borderColor: 'rgba(70, 70, 70, 0.5)',
  outlineColor: 'rgba(154, 152, 152, 0.5)',
  backgroundColor: 'rgb(255, 255, 255)'
}

// eslint-disable-next-line react/display-name
export const TextField :any = forwardRef<HTMLInputElement>((
  { type, placeholder, invalid, className, disabled, ...props } :InferProps<typeof TextField.propTypes>,
  ref) => (
    <ThemeProvider theme={lightTheme}>
      <TextFieldElement
        type={type || ''}
        placeholder={placeholder || ''}
        className={['Base__TextField', 'TextField', className].join(' ')}
        disabled={disabled || false}
        invalid={invalid || false}
        ref={ref}
        {...props}
      />
    </ThemeProvider>
))

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  props: PropTypes.any,
  className: PropTypes.string
}

TextField.defaultProps = {
  type: 'text',
  invalid: false,
  disabled: false
}
