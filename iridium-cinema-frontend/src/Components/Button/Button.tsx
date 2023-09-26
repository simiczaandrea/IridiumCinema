import React from 'react'
import { buttonProps } from './ButtonInterface';

import './Button.scss'
/**
 * @param props
 * @note label - the label of the button
 * @note type -'button' | 'submit' | 'reset'
 * @note variant - 'filled' | 'outline'
 * @note onClick - handles click event
 * @returns Button component
 */
const Button = (props: buttonProps) => {
    const {label, type, variant, onClick} = props;
  return (
    <button
        type={type}
        onClick={onClick}
        className={`button button--${variant} button__label button--${variant}__label`}
    > 
        {label}
    </button>
  )
}

export default Button