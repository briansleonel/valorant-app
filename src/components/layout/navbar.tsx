import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { DisclousureLink, DropdownsLinks } from "./DropdownLinks";
import { classNames } from "../../utils/className";
import { navigationApp } from "../../config/navigation/navigation";

import logoValorant from "../../assets/img/valorant-logo.png";

export const NavBar = () => {
	return (
		<Disclosure
			as="nav"
			className="tw-bg-black tw-text-gray-200 tw-sticky tw-top-0 tw-z-50"
		>
			{({ open }) => (
				<>
					<div className="tw-mx-auto tw-max-w-6xl tw-px-2 sm:tw-px-6 lg:tw-px-8">
						<div className="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
							{/* Mobile menu button*/}
							<div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
								<Disclosure.Button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset ">
									<span className="tw-sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon
											className="tw-block tw-h-6 tw-w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="tw-block tw-h-6 tw-w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>

							<div className="tw-flex tw-flex-1 tw-items-center tw-justify-center  sm:tw-items-stretch sm:tw-justify-center">
								{/** -------- Logo ---------- */}
								<div className="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-center">
									{/** ------- Mobile Logo --------- */}
									<img
										className="tw-block tw-h-9 tw-w-auto lg:tw-hidden tw-m-auto"
										src={logoValorant}
										alt="Valorant Logo"
									/>
									{/** -------- Desktop Logo ---------- */}
									<img
										className="tw-hidden tw-h-9 tw-w-auto lg:tw-block"
										src={logoValorant}
										alt="Valorant Logo"
									/>
									<span className="font-valorant tw-ml-4 tw-text-xl tw-text-center">vALORaNT-AAP</span>
								</div>

								{/** -------- Desktop Links ------------- */}
								<div className="tw-flex tw-justify-center tw-items-center sm:tw-w-full">
									<div className="tw-hidden sm:tw-ml-6 sm:tw-block tw-space-x-20">
										{navigationApp.map((item) =>
											item.href === "/gameinfo" ? (
												<DropdownsLinks link={item} />
											) : (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														item.current
															? "tw-border-b tw-border-red"
															: " tw-text-gray-300",
														"tw-px-5 tw-py-3 tw-font-medium",
													)}
												>
													{item.name}
												</Link>
											),
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/** ----- Mobile Links ----------- */}
					<Disclosure.Panel className="sm:tw-hidden">
						<div className="tw-space-y-1 tw-px-2 tw-pb-3 tw-pt-2">
							{navigationApp.map((item) =>
								item.href === "/gameinfo" ? (
									<Disclosure.Button as={DisclousureLink} link={item} />
								) : (
									<Disclosure.Button
										as={Link}
										key={item.name}
										to={item.href}
										className={classNames(
											item.current
												? "tw-text-gray-200 tw-bg-blue"
												: " tw-text-gray-300",
											"tw-block tw-rounded-md tw-px-3 tw-py-2 tw-font-medium",
										)}
									>
										{item.name}
									</Disclosure.Button>
								),
							)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
