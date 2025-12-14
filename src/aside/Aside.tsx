import type {JSX} from "react";
import Transfers from "../components/transfers/Transfers.tsx";
import CompanyFilter from "../components/companyFilter/CompanyFilter.tsx";

export const Aside = (): JSX.Element => {
    return (
        <div className="aside">
            <Transfers />
            <CompanyFilter />
        </div>
    );
};