import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
    placeholder: string,
    type: HTMLInputTypeAttribute | undefined;
}

const TextInput = ({placeholder, type} : TextInputProps) => {
    return (
        <input type={type} placeholder={placeholder} className="px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium mb-8"/>
    );
}

export default TextInput;