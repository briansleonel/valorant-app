import { Abilities } from "../../../types/agents.js";
import {
    Paragraph,
    Subtitle,
    Title,
} from "../../StyledComponents/title.styled-component.tsx.js";

import { colorsApp } from "../../../config/styles/colors.js";
import { useEffect, useState } from "react";
import { AbilitieIcon } from "./AbilitieIcon.js";

interface IProps {
    abilities: Array<Abilities>;
}

export const SpecialAbilities = ({ abilities }: IProps) => {
    const [selected, setSelected] = useState<Abilities>(abilities[0]);

    const getKeyAbility = (a: Abilities) => {
        return a.slot === "Ability1"
            ? "Q"
            : a.slot === "Ability2"
            ? "E"
            : a.slot === "Grenade"
            ? "C"
            : "X";
    };

    const mapAbilities = () => {
        return abilities.map((ability) => (
            <AbilitieIcon
                ability={ability}
                key={ability.slot}
                onClick={setSelected}
                active={selected === ability}
            />
        ));
    };

    useEffect(() => {
        setSelected(abilities[0]);
    }, [abilities]);

    return (
        <div className="tw-pt-8 tw-mt-0 sm:tw-mt-10 tw-border-t tw-border-gray-400">
            <Title className="!tw-text-5xl">Habilidades Especiales</Title>

            <ul className="tw-w-full tw-flex tw-justify-between tw-gap-4 sm:tw-gap-12 tw-mt-6 sm:tw-justify-center">
                {mapAbilities()}
            </ul>

            <div className="tw-px-0 sm:tw-px-44 tw-mt-10 tw-mb-12 sm:tw-mb-auto">
                <Subtitle className="!tw-text-xl" color={colorsApp.gray[500]}>
                    {`${getKeyAbility(selected)} - ${selected.displayName}`}
                </Subtitle>
                <Paragraph className="tw-mt-6" color={colorsApp.gray[400]}>
                    {selected.description}
                </Paragraph>
            </div>
        </div>
    );
};
