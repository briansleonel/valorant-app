import { useState } from "react";

export function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setValue(e.currentTarget.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange,
    };

    return inputProps;
}
