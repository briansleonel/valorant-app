import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./dropdown.module.css";
import { useEffect, useState } from "react";
import { IData } from "../../../api/base.api";

interface IProps {
    options: Array<IData>;
    selected: IData;
    setSelected: (select: IData) => void;
    title: string;
}

export const Dropdown = ({ options, selected, setSelected, title }: IProps) => {
    const [isActive, setIsActive] = useState(false);

    const selectItemHandler = (option: IData) => {
        setIsActive(!isActive);
        setSelected(option);
    };

    return (
        <div className={styles.dropdown}>
            <div
                className={styles.dropdownBtn}
                onClick={(e) => setIsActive(!isActive)}
            >
                <span>{title}</span>
                <ChevronDownIcon className={styles.icon} />
            </div>
            {isActive && (
                <div className={styles.dropdownContent}>
                    {options.map((op, i) => (
                        <div
                            key={op.value}
                            className={styles.dropdownItem}
                            onClick={(e) => selectItemHandler(op)}
                        >
                            <span
                                className={
                                    selected === op ? styles.selected : ""
                                }
                            >
                                {op.label}
                            </span>
                            {selected === op ? (
                                <span className={styles.checkIcon}>
                                    <CheckIcon />
                                </span>
                            ) : null}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
