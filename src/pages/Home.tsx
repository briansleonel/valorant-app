import { ButtonValorant } from "../components/Buttons/ButtonValorant/Button";
import { BackgroundImgContentFlex, BackgroundImgMain } from "../components/StyledComponents/backgroundImg.styled-component";

import img from "../assets/img/valorant-3.jpg"

const Home = () => {
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
					href="#"
				/>
			</BackgroundImgContentFlex>
		</BackgroundImgMain>
	);
};

export default Home;
