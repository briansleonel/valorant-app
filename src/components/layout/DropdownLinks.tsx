import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import {
	MapIcon,
	UserGroupIcon,
	PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/className";
import { ILink } from "../../types/navbar";

interface Props {
	link: ILink;
}

export const DropdownsLinks = ({ link }: Props) => {
	return (
		<Menu as="div" className="tw-relative tw-inline-block">
			<div>
				<Menu.Button className="tw-inline-flex tw-w-full tw-justify-center tw-gap-x-1.5 tw-rounded-md tw-bg-black tw-px-3 tw-py-2 tw-text-gray-200 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-black active:tw-bg-black">
					Game Information
					<ChevronDownIcon
						className="-tw-mr-1 tw-h-5 tw-w-5 tw-text-gray-300"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="tw-absolute tw-right-0 tw-z-10 tw-border-t-2 tw-border-t-red tw-w-56 tw-origin-top-right tw-rounded-md tw-bg-dark-600 tw-shadow-xl tw-ring-1 tw-ring-gray-200 tw-ring-opacity-10 tw-outline-8 tw-outline-red focus:tw-outline-none">
					<div className="tw-py-1">
						{link.subLinks.map((item) => (
							<Menu.Item key={item.name}>
								{({ active }) => (
									<Link
										to={`${link.href}${item.href}`}
										key={link.name}
										className={classNames(
											active
												? "tw-bg-gray-200 tw-text-gray-600"
												: "tw-text-gray-200",
											"tw-block tw-px-4 tw-py-2 tw-text-sm",
										)}
									>
										<div className="tw-inline-flex tw-items-center">
											{item.href === "/agents" ? (
												<UserGroupIcon className="tw-block tw-h-5 tw-w-5" />
											) : item.href === "/gamemodes" ? (
												<PuzzlePieceIcon className="tw-block tw-h-5 tw-w-5" />
											) : (
												<MapIcon className="tw-block tw-h-5 tw-w-6" />
											)}
											<span className="tw-ml-2">{item.name}</span>
										</div>
									</Link>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export const DisclousureLink = ({ link }: Props) => {
	return (
		<Disclosure as="div" className="tw-block">
			{({ open }) => (
				/* Use the `open` state to conditionally change the direction of an icon. */
				<>
					<Disclosure.Button className="tw-inline-flex tw-justify-between tw-px-3 tw-py-2 tw-font-medium tw-w-full">
						{link.name}
						<ChevronRightIcon
							className={classNames(
								open ? "rotate-90 transform" : "",
								"tw-block tw-h-6 tw-w-6",
							)}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className="sm:tw-hidden tw-bg-dark-600 tw-rounded-md">
						<div className="tw-p-2">
							{link.subLinks.map((item) => (
								<Disclosure.Button
									as={Link}
									key={item.name}
									to={`${link.href}${item.href}`}
									className="tw-text-gray-300 tw-block tw-rounded-md tw-px-5 tw-py-2 tw-font-medium"
								>
									<div className="tw-inline-flex ">
										{item.href === "/agents" ? (
											<UserGroupIcon className="tw-block tw-h-5 tw-w-5" />
										) : item.href === "/gamemodes" ? (
											<PuzzlePieceIcon className="tw-block tw-h-5 tw-w-5" />
										) : (
											<MapIcon className="tw-block tw-h-5 tw-w-5" />
										)}
										<span className="tw-ml-3">{item.name}</span>
									</div>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
