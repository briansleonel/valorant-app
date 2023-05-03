import { ButtonValorant } from "../../components/Buttons/Button";
import styles from "./home.module.css";

const Home = () => {
	return (
		<section className={styles["bg-home"]}>
			<div className={styles["bg-home-container"]}>
				<span className="tw-mb-14 sm:tw-mb-10 tw-text-center tw-px-16 tw-mt-0">
					Un juego de disparos táctico 5v5 basado en personajes.
				</span>
				<h1 className="font-valorant tw-text-6xl sm:tw-text-9xl tw-text-center">vALORaNT</h1>
				<ButtonValorant
					className="tw-text-lg font-dinnextw05-bold tw-mt-20 sm:tw-mt-10"
					content="Juega Gratis"
					href="#"
				/>
			</div>
		</section>
	);
};

export default Home;
