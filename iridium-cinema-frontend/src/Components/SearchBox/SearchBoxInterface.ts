export interface searchBoxProps {
    name: string;
    placeholder: string;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}