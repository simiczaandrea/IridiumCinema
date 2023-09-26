import React from 'react'
import { textFieldProps } from './TextFieldInterface';
import './TextField.scss'

//@Todo - handle error, the input field and text should be highlighted red 
 

/**
 * @param props 
 * @note label - the label for the input field (mandatory)
 * @note type - 'text' | 'password' | 'email' | 'number' (mandatory)
 * @note helpText - it shows an error message during validation (optional)
 * @note isRequired - set if the input field is required or not (mandatory)
 * @note value - the value of the input field (mandatory)
 * @note isError - it set a style if there is an error during the validation
 * @note onChange - handles the input field value changes (mandatory)
 * @returns TextField component with label and optionally a help text
 */
const TextField = (props: textFieldProps) => {
    const { label, type, name, helpText, isRequired, value, isError, onChange} = props;

    return (
        <div  className="textInput">
            <input
                className={`textInput__inputField ${isError ? 'textInput__inputField--error': ''}`}
                type={type}
                name= {name}
                placeholder=" "
                required={isRequired}
                autoComplete='off'
                value={value}
                onChange={onChange}
            />
            <label 
                htmlFor={name}
                className={`textInput__label ${isError ? 'textInput__label--error': ''}`}
            >
                {label} {isRequired && "*"}
            </label>
            <p className='textInput__helpText'>{helpText}</p>
        </div>
    )
}

export default TextField