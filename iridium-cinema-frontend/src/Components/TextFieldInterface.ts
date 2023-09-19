type inputFieldTypes = 'text' | 'password' | 'email' | 'number';

export interface textFieldInterface {
    /**
     * the label of the input field
     */
    label: string, 
    /**
     * the type of the input field 
     * values can be: 'text' | 'password' | 'email' | 'number'
     */
    type: inputFieldTypes, 
    /**
     * the name of the input field
     */
    name: string
    /**
     * error message during input validation
     */
    helpText?: string,
    /**
     * sets the input field required
     */
    isRequired: boolean,
    /**
     * the value of the input field
     */
    value: string,
    /**
     * 
     * @param event 
     * handles the changes of the input field value
     * @returns void
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}