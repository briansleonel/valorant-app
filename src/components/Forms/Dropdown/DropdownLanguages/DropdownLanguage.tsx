import { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown";
import { IData, languagesApi } from "../../../../api/base.api";
import { useAppDispatch } from "../../../../hooks/hooks-redux";
import { changeLanguage } from "../../../../store/filters/filtersSlice";

export const DropdownLanguage = () => {
    const [selected, setSelected] = useState<IData>(languagesApi[0]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            changeLanguage({
                language: selected.value,
            })
        );
    }, [selected]);

    return (
        <Dropdown
            title={selected.label}
            selected={selected}
            setSelected={setSelected}
            options={languagesApi}
        />
    );
};
