import { ButtonValorant } from "../components/Buttons/ButtonValorant/Button";
import {
    BackgroundImgMain,
    BackgroundImgContentFlex,
} from "../components/StyledComponents/backgroundImg.styled-component";

import background from "../assets/img/valorant-1.jpg";
import { colorsApp } from "../config/styles/colors";

const ErrorPage = () => {
    return (
        <>
            <BackgroundImgMain img={background}>
                <BackgroundImgContentFlex className="tw-p-10">
                    <h2 className="tw-uppercase font-tungsten-bold tw-text-5xl sm:tw-text-7xl tw-tracking-wide tw-text-center">¡UPS! Lo sentimos,</h2>
                    <h2 className="tw-uppercase font-tungsten-bold tw-text-5xl sm:tw-text-7xl tw-tracking-wide tw-text-center tw-mt-2">ha ocurrido un error inesperado</h2>
                    <ButtonValorant
                        className="tw-text-lg font-dinnextw05-bold tw-mt-20 sm:tw-mt-16"
                        content="Ir a la página de inicio"
                        href="/"
                        color={colorsApp.dark[600]}
                        colorHover={colorsApp.gray[200]}
                        backgroundColor={colorsApp.gray[200]}
                        backgroundColorHover={colorsApp.dark[550]}
                    />
                </BackgroundImgContentFlex>
            </BackgroundImgMain>
        </>
    );
};

export default ErrorPage;
