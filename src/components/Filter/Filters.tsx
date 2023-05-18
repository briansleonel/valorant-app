import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks-redux";
import { changeDisplayName } from "../../store/filters/filtersSlice";
import { useFormInput } from "../../hooks/useFormInput";
import { DropdownLanguage } from "../Forms/Dropdown/DropdownLanguages/DropdownLanguage";
import { InputTextForm } from "../Forms/Input/InputForm";
import { ButtonBlue, ButtonRed } from "../Buttons/Button";

interface OrderASC {
    asc: string;
    dec: string;
}

const order: OrderASC = {
    asc: "A-Z",
    dec: "Z-A",
};

const FiltersComponent = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.filters);

    const displayNameInput = useFormInput("");

    const clickSearchDisplayNameHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ): void => {
        e.preventDefault();
        dispatch(
            changeDisplayName({
                ...filters,
                displayName: displayNameInput.inputProps.value,
            })
        );
    };

    const clickCleanSearchDisplayNameHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        displayNameInput.resetInput();
        dispatch(
            changeDisplayName({
                ...filters,
                displayName: "",
            })
        );
    };

    return (
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-p-4 tw-mt-2 sm:tw-p-10 sm:tw-mt-8 md:tw-grid-cols-3 lg:tw-grid-cols-3">
            <div className="tw-block tw-gap-6 tw-items-center sm:tw-flex md:tw-col-span-2 lg:tw-col-span-1">
                <label htmlFor="displayName" className="tw-text-lg">
                    Nombre
                </label>
                <InputTextForm
                    className="tw-mt-2 sm:tw-mt-auto"
                    name="displayName"
                    type="text"
                    inputProps={displayNameInput.inputProps}
                />
            </div>
            <div className="tw-flex tw-gap-6">
                <ButtonBlue
                    type="button"
                    onClick={clickSearchDisplayNameHandler}
                >
                    Buscar
                </ButtonBlue>
                <ButtonRed
                    type="button"
                    onClick={clickCleanSearchDisplayNameHandler}
                >
                    Limpiar
                </ButtonRed>
            </div>

            <div className="tw-block tw-gap-6 sm:tw-flex sm:tw-items-center tw-col-span-1 md:tw-col-span-3 lg:tw-col-span-1">
                <label htmlFor="language" className="tw-text-lg">
                    Idioma
                </label>
                <div className="tw-w-full tw-mt-2 sm:tw-mt-auto">
                    <DropdownLanguage />
                </div>
            </div>
        </div>
    );
};

export default FiltersComponent;

/*
	const changeSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
		switch (e.currentTarget.name) {
			case "order":
				dispatch(
					changeOrder({
						...filters,
						[e.currentTarget.name]: e.currentTarget.value,
					}),
				);
				break;
			case "language":
				dispatch(
					changeLanguage({
						[e.currentTarget.name]: e.currentTarget.value,
					}),
				);
				break;
		}
	};
	*/

/*
				<SelectLanguage elements={languagesApi} className="tw-mt-2 sm:tw-mt-0 sm:tw-col-span-2" />
				<select
					name="language"
					className="tw-col-span-3 tw-ml-3 tw-rounded-md tw-border-0 tw-p-1.5 tw-text-gray-600 tw-shadow-sm tw-ring-1 focus:tw-ring-2 focus:tw-ring-red tw-text-sm before:tw-ring-red"
					onChange={changeSelect}
				>
					{languagesApi.map((l, i) => (
						<option key={i + 1} value={l.value}>
							{l.description}
						</option>
					))}
				</select>
					*/

/*
			<div>
				<label htmlFor="order">Order</label>
				<select name="order" defaultValue={order.asc} onChange={changeSelect}>
					<option value={order.asc}>{order.asc}</option>
					<option value={order.dec}>{order.dec}</option>
				</select>
			</div>
			*/
