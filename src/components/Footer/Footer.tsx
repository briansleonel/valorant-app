import {
    ButtonSocialMedia,
    Container,
    Copyright,
    SocialNetworks,
} from "./footer.elements";
import { socialNetworks } from "./socialNetworks";

export const Footer = () => {
    return (
        <Container>
            <SocialNetworks>
                {socialNetworks.map((e) => (
                    <ButtonSocialMedia href={e.href} key={e.name}>
                        {e.icon}
                    </ButtonSocialMedia>
                ))}
            </SocialNetworks>
            <Copyright>
                &copy; 2023 - Aplicación creada por González Brian Leonel -
                Todos los derechos reservados.
            </Copyright>
        </Container>
    );
};
