import { ButtonValorant } from "../components/Buttons/ButtonValorant/Button";
import {
    BackgroundImgContentFlex,
    BackgroundImgMain,
} from "../components/StyledComponents/backgroundImg.styled-component";

import img from "../assets/img/valorant-3.jpg";

const Home = () => {
    const linkToValorant =
        "https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=jncBcnNB8I8sEMpyarM8ieFqxjMysnUKgN5_bgllkv4&code_challenge_method=S256&prompt=signup&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account%20email&show_region=true&state=256e5f3d6efac139a0c03a59bd&uri=https%3A%2F%2Fplayvalorant.com%2Fes-mx%2Fdownload";

    return (
        <BackgroundImgMain img={img}>
            <BackgroundImgContentFlex>
                <span className="tw-mb-14 sm:tw-mb-10 tw-text-center tw-px-16 tw-mt-0">
                    Un juego de disparos táctico 5v5 basado en personajes.
                </span>
                <h1 className="font-valorant tw-text-6xl sm:tw-text-9xl tw-text-center">
                    vALORaNT
                </h1>
                <ButtonValorant
                    className="tw-text-lg font-dinnextw05-bold tw-mt-20 sm:tw-mt-10"
                    content="Juega Gratis"
                    href={linkToValorant}
                />
            </BackgroundImgContentFlex>
        </BackgroundImgMain>
    );
};

export default Home;
