import { Translate } from "../../helpers/translate/Translate";

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <span className="breadcrumb-link"><Translate text="breadcrumb.home"></Translate></span>
            <span className="breadcrumb-sperator"><i className="fa-solid fa-chevron-right"></i></span>
            <span className="breadcrumb-link"><Translate text="breadcrumb.reserveCommercialNameRequest"></Translate></span>
        </div>
    )
}

export default Breadcrumb;