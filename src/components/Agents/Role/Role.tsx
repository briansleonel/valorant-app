import styled from "styled-components";
import { colorsApp } from "../../../config/styles/colors";
import { devices } from "../../../config/styles/breakpoint";

interface IProps {
    displayName: string;
    displayIcon: string;
    color?: string;
}

export const Role = ({ displayIcon, displayName, color }: IProps) => {
    return (
        <div className="tw-flex tw-items-center tw-w-full">
            <DisplayNameRole color={color}>{displayName}</DisplayNameRole>
            <picture className="tw-ml-4 tw-w-10">
                <IconRole src={displayIcon} alt={displayName} />
            </picture>
        </div>
    );
};

const DisplayNameRole = styled.span<{ color?: string }>`
    font-family: "TungstenBold", arial, georgia, sans-serif;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 3.75rem;
    color: ${(p) => (p.color ? p.color : colorsApp.gray[300])};
`;

const IconRole = styled.img`
    width: 100%;
    -webkit-filter: brightness(0.06);
    filter: brightness(0.06);

    @media only screen and (${devices.sm}) {
        -webkit-filter: brightness(1);
    filter: brightness(1);
}
`;

/*
<div className={styles.role}>
                                    <span>{agent.role.displayName}</span>
                                    <picture>
                                        <img
                                            src={agent.role.displayIcon}
                                            alt={agent.role.displayName}
                                        />
                                    </picture>
                                </div>
                                */
