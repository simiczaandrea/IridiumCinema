import React from 'react'
import { checkboxInterface } from './CheckboxInterface';

import './Checkbox.scss';
/**
 * 
 * @param props 
 * @note name - the name of the checkbox
 * @note label - the label of the checkbox
 * @note isChecked - show if the checkbox is checked or not
 * @note onChange - handles the check event
 * @returns checkbox component
 */
const Checkbox = (props: checkboxInterface) => {
    const {name, label, isChecked, onChange} = props;
    
    return (
        <div className='checkbox'>
            <input
                className='checkbox__input'
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={onChange}

            />
            <label htmlFor={name} className='checkbox__label'>{label}</label>
        </div>
    )
}

export default Checkbox