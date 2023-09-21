import React from 'react'
import { buttonInterface } from './ButtonInterface';

import './Button.scss'

const Button = (props: buttonInterface) => {
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