import React from "react";
import { languagesApi } from "../../api/base.api";
import { useAppDispatch, useAppSelector } from "../../app/hooks-redux";
import {
    changeDisplayName,
    changeLanguage,
    changeOrder,
} from "../../reducers/filters/filtersSlice";

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

    const changeDisplayNameHandler = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        dispatch(
            changeDisplayName({
                displayName: e.currentTarget.value,
            })
        );
    };

    const changeOrderHandler = (
        e: React.FormEvent<HTMLSelectElement>
    ): void => {
        console.log(e.currentTarget.name);

        dispatch(
            changeOrder({
                order: e.currentTarget.value,
            })
        );
    };

    const changeLanguageHandler = (
        e: React.FormEvent<HTMLSelectElement>
    ): void => {
        dispatch(
            changeLanguage({
                language: e.currentTarget.value,
            })
        );
    };

    const changeSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
        switch (e.currentTarget.name) {
            case "order":
                dispatch(
                    changeOrder({
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
                    onChange={changeDisplayNameHandler}
                />
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
