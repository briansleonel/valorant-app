import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import { devices } from "../../config/styles/breakpoint";

export const CardContainer = styled.div`
	//right: calc(8.33333% - 2.75rem);
	right: 0;
	transition: opacity .4s ease-out;
	padding: 2em;
	background-color: ${colorsApp.green};
	//bottom: -5.5rem;
    pointer-events: auto;
    position: absolute;
    //width: 33rem;
    width: 100%;
	
    color: ${colorsApp.gray[300]};

	::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: .7em;
		height: .7em;
		background-color: ${colorsApp.blue};
	}

	::after {
		content: "";
		position: absolute;
		border-bottom: 1em solid ${colorsApp.gray[300]};
		border-right: 1em solid transparent;
    	left: 0;
		bottom: 0;
		display: block;
		font-size: 2.5rem;
		height: 0;
		width: 0;
	}

    @media only screen and (${devices.sm}) {
        top: -1em;
        width: 16em;

        ::before {
            background-color: ${colorsApp.gray[300]};
        }

        ::after {
            width: .5rem;
            height: .5rem;
            border-right: none;
            border-bottom: none;
            background-color: ${colorsApp.blue};
        }
    }
`;
