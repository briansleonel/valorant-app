import styled from "styled-components";

interface IPropsButtonContainer {
    width? : string
}

export const ButtonSpanContainer = styled.div`
	overflow: hidden;
    position: relative;
    display: block;

	&::before {
		content: "";
		position: absolute;
		display: block;
		height: calc(100% - 0.3rem);
		width: 100%;
		background-color: #ff4655;
		left: 0;
		bottom: 0;
	}

	&::after {
		content: "";
		position: absolute;
		display: block;
		background-color: #ff4655;
		height: 0.3rem;
		width: calc(100% - 0.3rem);
		top: 0;
		left: 0.3rem;
	}
`;

export const ButtonSpanHover = styled.span`
	display: block;
    background-color: #0f1923;
    height: 100%;
    width: 120%;
    position: absolute;               
    top: 0%;
    left: -5%;
    z-index: 1;

    transform: translateX(-100%) skew(-10deg);
    transition: transform .5s ease-out;
`;

export const ButtonSpanContent = styled.span`
	position: relative;
    display: block;
    padding: 1rem 2rem;
    background-color: transparent;
    text-transform: uppercase;
    text-align: center;
    z-index: 1;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		background-color: #0f1923;
		height: 0.4rem;
		width: 0.4rem;
	}

	&::after {
		content: "";
		position: absolute;
		right: 0;
		bottom: 0;
		display: block;
		background-color: #0f1923;
		height: 0.6rem;
		width: 0.6rem;
		transition: background-color .5s ease-out;
	}
`;

export const ButtonContainer = styled.a<IPropsButtonContainer>`
    display: block;
    padding: .6rem;
    position: relative;
    width: ${p => p.width ? p.width : "19em"};
    opacity: 1;
    transition: opacity .7s ease-out .2s;
    border: 0;
	font-size: .9rem;
    cursor: pointer;
    text-align: center;
    background: none;

	&::before {
		content: "";
		display: block;
		height: calc(50% - 0.7rem);
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		border: 1px solid hsla(38, 22%, 90%, 0.5);
	 	border-bottom: 0;
	}
	&::after {
		content: "";
		display: block;
		height: calc(50% - 0.7rem);
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		border: 1px solid hsla(38, 22%, 90%, 0.5);
		border-top: 0;
	}

	&:hover {
		${ButtonSpanContainer} {
			${ButtonSpanHover} {
				transform: translateX(0%)
			}
			${ButtonSpanContent} {
				&::after {
					background-color: #f9f9f9;
				}
			}
		}
	}
`;