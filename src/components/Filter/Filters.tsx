import React from "react";
import { languagesApi } from "../../api/base.api";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks-redux";
import {
	changeDisplayName,
	changeLanguage,
	changeOrder,
} from "../../store/filters/filtersSlice";
import { useFormInput } from "../../hooks/useFormInput";
import { SelectLanguage, SelectLanguageValorant } from "../Forms/SelectForm";

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
		e: React.MouseEvent<HTMLButtonElement>,
	): void => {
		e.preventDefault();
		dispatch(
			changeDisplayName({
				...filters,
				displayName: displayNameInput.inputProps.value,
			}),
		);
	};

	const clickCleanSearchDisplayNameHandler = (
		e: React.MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();
		displayNameInput.resetInput();
		dispatch(
			changeDisplayName({
				...filters,
				displayName: "",
			}),
		);
	};

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

	return (
		<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-5 tw-mt-7 tw-p-5 sm:tw-mt-12 sm:tw-p-6 tw-text-dark-500 sm:tw-rounded-md tw-bg-gray-200">
			<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-4 sm:tw-col-span-2 tw-items-center">
				<label htmlFor="displayName">Name</label>
				
				<input
					type="text"
					name="displayName"
					id="displayName"
					className="tw-col-span-3 tw-p-4 tw-border tw-border-gray-400 tw-text-gray-600 tw-ring-0 tw-text-sm"
					{...displayNameInput.inputProps}
				/>
				
			</div>
			<div className="">
				<button type="button" onClick={clickSearchDisplayNameHandler}>
					Buscar
				</button>
				<button type="button" onClick={clickCleanSearchDisplayNameHandler}>
					Limpiar
				</button>
			</div>
			{/*
			<div>
				<label htmlFor="order">Order</label>
				<select name="order" defaultValue={order.asc} onChange={changeSelect}>
					<option value={order.asc}>{order.asc}</option>
					<option value={order.dec}>{order.dec}</option>
				</select>
			</div>
			*/}

			<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 sm:tw-col-span-2 tw-items-center">
				<label htmlFor="language">Languages</label>
				<SelectLanguageValorant
					elements={languagesApi}
					className="sm:tw-mt-0 sm:tw-col-span-2"
				/>
				{/*
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
					*/}
			</div>
		</div>
	);
};

export default FiltersComponent;
