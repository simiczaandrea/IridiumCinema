import React from 'react'
import { textFieldInterface } from './TextFieldInterface';
import './TextField.scss'

//@Todo - handle error, the input field and text should be highlighted red 
 

/**
 * @param props 
 * -- label - the label for the input field (mandatory)
 * -- type - the type of the input field it can be 'text' | 'password' | 'email' | 'number' (mandatory)
 * -- helpText - it shows an error message during validation (optional)
 * -- isRequired - set if the input field is required or not (mandatory)
 * -- value - the value of the input field (mandatory)
 * -- isError - it set a style if there is an error during the validation
 * -- onChange - handles the input field value changes (mandatory)
 * @returns TextField component with label and optionally a help text
 */
const TextField = (props: textFieldInterface) => {
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