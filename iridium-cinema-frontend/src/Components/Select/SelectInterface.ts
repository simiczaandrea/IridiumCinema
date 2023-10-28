
export interface Option {
    id: number;
    label: string;
}


export interface SelectProps {
    options: Option[];
    selected: string;
    defaultValue: string;
    setSelected(selectedValue: string): void;
}