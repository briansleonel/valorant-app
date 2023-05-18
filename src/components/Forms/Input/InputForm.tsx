import styled from "styled-components";
import { colorsApp } from "../../../config/styles/colors";

interface IProps {
    className?: string;
    type: "text" | "url" | "email";
    name: string;
    inputProps: {
        value: string;
        onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    };
}

export const InputTextForm = ({
    name,
    type,
    inputProps,
    className,
}: IProps) => {
    return (
        <Input
            className={className}
            type={type}
            name={name}
            id={name}
            {...inputProps}
        />
    );
};

const Input = styled.input`
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    padding: 1em 1.5em;
    border: 1px solid ${colorsApp.gray[400]};
    color: ${colorsApp.dark[600]};
    background-color: transparent;
    transition: border 0.3s ease-out;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);

    &&:active,
    &:focus {
        border: 1px solid ${colorsApp.gray[600]};
        //border: 1px solid #BD3944;
    }
`;
