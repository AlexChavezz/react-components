import { ChangeEvent } from "react";

interface TextInputProps {
    value: string,
    onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void, 
    name: string,

}

export const TextInput = ({
    value,
    onChange,
    name
}: TextInputProps) => {
    return (
        <input
            type="text"
            onChange={ onChange }
            name={name}
            value={value}
        />
    );
}

interface InputSubmitProps {
    onClick?: () => void
    textContent?: string,
    className?: string,
}

export const InputSubmit = ({
    onClick,
    textContent,
    className
}: InputSubmitProps) => {
    return (
        <input
            type="submit"
            onClick={onClick}
            value={textContent}
            className={className}
            style={{
                width: "80px",
                height: "35px",
                borderRadius: '5px',
                backgroundColor: '#24ADF3',
                border: " 1px solid #24ADF3",
                color: '#fff',
                cursor: "pointer",
            }}
        />
    );
}

interface FormProps {
    children: React.ReactElement | React.ReactElement[]
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}
export const Form = ({
    onSubmit,
    children,
}: FormProps) => {
    return (
        <form
            onSubmit={onSubmit}
        >
            {
                children
            }
        </form>
    );
}
