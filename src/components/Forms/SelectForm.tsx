import { Listbox, Transition } from "@headlessui/react";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { IData } from "../../api/base.api";
import { classNames } from "../../utils/className";
import { useAppDispatch } from "../../hooks/hooks-redux";
import { changeLanguage } from "../../store/filters/filtersSlice";

interface Props {
	elements: Array<IData>;
	className: string;
}

export function SelectLanguage({ elements, className }: Props) {
	const [selected, setSelected] = useState<IData>(elements[0]);

	const dispatch = useAppDispatch();

	const changeSelectedValue = (val: IData) => {
		setSelected(val);
		dispatch(
			changeLanguage({
				language: val.value,
			}),
		);
	};

	return (
		<Listbox value={selected} onChange={changeSelectedValue}>
			{({ open }) => (
				<>
					{/*
					<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
						Assigned to
					</Listbox.Label>
                    */}
					<div className={classNames("tw-relative", className)}>
						<Listbox.Button className="tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-bg-gray-200 tw-py-1.5 tw-pl-1 tw-pr-10 tw-text-left tw-text-gray-600 tw-shadow-sm tw-ring-2 tw-ring-inset tw-ring-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red sm:tw-text-sm sm:tw-leading-6">
							<span className="tw-flex tw-items-center">
								<span className="tw-ml-3 tw-block tw-truncate">
									{selected.description}
								</span>
							</span>
							<span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2">
								<ChevronUpDownIcon
									className="tw-h-5 tw-w-5 tw-text-red"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="tw-absolute tw-z-10 tw-mt-1 tw-max-h-56 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-gray-200 tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
								{elements.map((e) => (
									<Listbox.Option
										key={e.value}
										className={({ active }) =>
											classNames(
												active
													? "tw-bg-dark-500 tw-text-gray-200"
													: "tw-text-gray-600",
												"tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-1 tw-pr-9",
											)
										}
										value={e}
									>
										{({ selected, active }) => (
											<>
												<div className="tw-flex tw-items-center">
													{/*
													<img
														src={person.avatar}
														alt=""
														className="h-5 w-5 flex-shrink-0 rounded-full"
													/>
													*/}
													<span
														className={classNames(
															selected ? "tw-font-semibold" : "tw-font-normal",
															"tw-ml-3 tw-block tw-truncate",
														)}
													>
														{e.description}
													</span>
												</div>

												{selected ? (
													<span
														className={classNames(
															active ? "tw-text-white" : "tw-text-indigo-600",
															"tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4",
														)}
													>
														<CheckIcon
															className="tw-h-5 tw-w-5"
															aria-hidden="true"
														/>
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}

export function SelectLanguageValorant({ elements, className }: Props) {
	const [selected, setSelected] = useState<IData>(elements[0]);

	const dispatch = useAppDispatch();

	const changeSelectedValue = (val: IData) => {
		setSelected(val);
		dispatch(
			changeLanguage({
				language: val.value,
			}),
		);
	};

	return (
		<Listbox value={selected} onChange={changeSelectedValue}>
			{({ open }) => (
				<>
					{/*
					<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
						Assigned to
					</Listbox.Label>
                    */}
					<div className={classNames("tw-relative", className)}>
						<Listbox.Button className="tw-relative tw-w-full tw-cursor-default tw-bg-gray-200 tw-p-4 tw-pr-10 tw-text-left tw-border tw-border-gray-400 tw-text-gray-600 focus:tw-outline-none focus:tw-ring-0 sm:tw-text-sm">
							<span className="tw-flex tw-items-center">
								<span className="tw-ml-3 tw-block tw-truncate">
									{selected.description}
								</span>
							</span>
							<span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2">
								<ChevronDownIcon
									className={classNames(
										open ? "tw-rotate-180" : "",
										"transition-transform ease-in-out tw-h-5 tw-w-5 tw-text-dark-600",
									)}
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="tw-absolute tw-z-10 tw-max-h-56 tw-w-full tw-overflow-auto tw-bg-gray-200 tw-border tw-border-t-0 tw-border-gray-400 tw-py-0 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
								{elements.map((e) => (
									<Listbox.Option
										key={e.value}
										className={({ active }) =>
											classNames(
												active
													? "tw-bg-dark-500 tw-text-gray-200"
													: "tw-text-black",
												"tw-relative tw-cursor-default tw-select-none tw-py-3 tw-pl-4 tw-pr-9",
											)
										}
										value={e}
									>
										{({ selected, active }) => (
											<>
												<div className="tw-flex tw-items-center">
													{/*
													<img
														src={person.avatar}
														alt=""
														className="h-5 w-5 flex-shrink-0 rounded-full"
													/>
													*/}
													<span
														className={classNames(
															selected ? "tw-font-semibold" : "tw-font-normal",
															"tw-ml-3 tw-block tw-truncate",
														)}
													>
														{e.description}
													</span>
												</div>

												{selected ? (
													<span
														className={classNames(
															active ? "tw-text-white" : "tw-text-indigo-600",
															"tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4",
														)}
													>
														<CheckIcon
															className="tw-h-5 tw-w-5"
															aria-hidden="true"
														/>
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
