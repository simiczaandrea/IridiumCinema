import { ChangeEvent } from "react";

export interface checkboxInterface {
    /**
     * Name of the checkbox
     */
    name: string;
    /**
     * the label of the checkbox
     */
    label: string;
    /**
     * the value of the checkbox
     */
    isChecked: boolean;
    /**
     * 
     * @param value 
     * - handles whether the checkbox checked or not
     * @returns void
     */
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}