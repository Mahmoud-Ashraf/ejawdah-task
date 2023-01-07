import { Translate } from "../../helpers/translate/Translate";
import { Link } from "react-router-dom";

const RequestSent = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-3">
                <p className="text-center"><Translate text="reserveNameRequestForm.requestSent"></Translate></p>
                <Link to="/">
                    <button className="btn btn-primary w-100"><Translate text="breadcrumb.home"></Translate></button>
                </Link>
            </div>
        </div>
    )
}

export default RequestSent;