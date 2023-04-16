import React, { useState } from "react";
import { languagesApi } from "../../api/base.api";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks-redux";
import {
    changeDisplayName,
    changeLanguage,
    changeOrder,
} from "../../store/filters/filtersSlice";

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

    const [inputDisplayName, setInputDisplayName] = useState<string>("");

    const changeDisplayNameHandler = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        e.preventDefault();
        setInputDisplayName(e.currentTarget.value);
        /*
        dispatch(
            changeDisplayName({
                ...filters,
                displayName: e.currentTarget.value,
            })
        );*/
    };

    const clickSearchDisplayNameHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ): void => {
        e.preventDefault();
        console.log("Searching...");
        dispatch(
            changeDisplayName({
                ...filters,
                displayName: inputDisplayName,
            })
        );
    };

    const changeSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
        switch (e.currentTarget.name) {
            case "order":
                dispatch(
                    changeOrder({
                        ...filters,
                        [e.currentTarget.name]: e.currentTarget.value,
                    })
                );
                break;
            case "language":
                dispatch(
                    changeLanguage({
                        [e.currentTarget.name]: e.currentTarget.value,
                    })
                );
                break;
        }
    };

    return (
        <>
            <h4>Filters</h4>
            <div>
                <label htmlFor="displayName">Name</label>
                <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    value={inputDisplayName}
                    onChange={changeDisplayNameHandler}
                />
                <button type="button" onClick={clickSearchDisplayNameHandler}>
                    Buscar
                </button>
            </div>
            <div>
                <label htmlFor="order">Order</label>
                <select
                    name="order"
                    defaultValue={order.asc}
                    onChange={changeSelect}
                >
                    <option value={order.asc}>{order.asc}</option>
                    <option value={order.dec}>{order.dec}</option>
                </select>
            </div>

            <div>
                <label htmlFor="language">Languages</label>
                <select
                    name="language"
                    defaultValue={order.asc}
                    onChange={changeSelect}
                >
                    {languagesApi.map((l, i) => (
                        <option key={i} value={l.value}>
                            {l.description}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default FiltersComponent;
