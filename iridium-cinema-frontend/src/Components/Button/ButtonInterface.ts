type buttonType = 'button' | 'submit' | 'reset';
type buttonVariant = 'filled' | 'outline'

export interface buttonInterface {
    /**
     * the label of the button
     */
    label: string;
    /**
     * the type of the button
     * it can be 'button' | 'submit' | 'reset'
     */
    type: buttonType;
    /**
     * set the button variant it can be 'filled' | 'outlined'
     */
    variant: buttonVariant;
    /**
     * 
     * @param event 
     * handles the click event
     * @returns void
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}