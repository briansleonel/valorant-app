import {
    CardBody,
    CardContainer,
    CardContent,
    CardImgScale,
    CardText,
    CardTitle,
} from "./Card";

interface Props {
    data: Array<any>;
}

interface PropsGamemode {
    weapon: any;
}

export const WeaponsCards = ({ data }: Props): JSX.Element => {
    return (
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-px-4 tw-pb-2 sm:tw-pt-0 sm:tw-px-10 sm:tw-grid-cols-2 ">
            {data !== null && data.length > 0
                ? data.map((element) => {
                      return <Weapon key={element.uuid} weapon={element} />;
                  })
                : "No data"}
        </div>
    );
};

const Weapon = ({ weapon }: PropsGamemode) => {
    return (
        <CardContainer>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CardContent>
                <CardImgScale
                    width={"auto"}
                    height="9rem"
                    src={
                        weapon.displayIcon !== null
                            ? weapon.displayIcon
                            : "/not-availiable-image.png"
                    }
                    alt={weapon.displayName}
                />
                <CardBody>
                    <CardTitle className="!tw-text-6xl sm:!tw-text-6xl"> {weapon.displayName} </CardTitle>
                </CardBody>
                <CardText className="tw-uppercase !tw-font-extralight !tw-text-base tw-mt-0 sm:tw-mt-3"><b className="tw-font-bold">TIPO // </b>{weapon.shopData !== null ? weapon.shopData.categoryText : weapon.displayName}</CardText>
            </CardContent>
        </CardContainer>
    );
};
