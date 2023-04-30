import { useFormInput } from "../../hooks/useFormInput";

interface InputProps {
	value: string;
	onChange: void;
}

export const InputFormValorant = (inputProps: InputProps) => {
	const displayNameInput = useFormInput("");

	return (
		<>
			<input
				type="text"
				name="displayName"
				id="displayName"
				className="tw-p-4 tw-border tw-border-gray-400 tw-text-gray-600 tw-ring-1 focus:tw-ring-2 focus:tw-ring-red tw-text-sm"
				{...displayNameInput.inputProps}
			/>

			<input
				type="text"
				name="displayName"
				id="displayName"
				className="tw-mt-2 sm:tw-mt-0 tw-col-span-3 tw-rounded-md tw-border-0 tw-p-1.5 tw-text-gray-600 tw-shadow-sm tw-ring-1 focus:tw-ring-2 focus:tw-ring-red tw-text-sm"
				{...displayNameInput.inputProps}
			/>
		</>
	);
};
