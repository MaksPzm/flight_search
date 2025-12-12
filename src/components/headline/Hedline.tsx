import type {JSX} from "react";
import Plane from "../../images/png/plane.png";

export const Headline = (): JSX.Element => {
    return (
        <div className="headline">
            <img className="headline__img" src={Plane} alt="самолёт" />
            <h1 className="headline__title">Поиск авиабилетов</h1>
        </div>
    );
};