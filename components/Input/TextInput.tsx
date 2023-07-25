import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
    placeholder: string,
    type: HTMLInputTypeAttribute | undefined;
    className?: string;
}

const TextInput = ({placeholder, type, className} : TextInputProps) => {
    return (
        <input type={type} placeholder={placeholder} className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}/>
    );
}

export default TextInput;