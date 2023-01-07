import { Translate } from "../../../helpers/translate/Translate";

const LicenseCard = (props) => {
    return (
        <div className="license">
            <header className="license-header">
                <h4 className="license-header-title">{props.license.name}</h4>
                <div className="license-header-img">
                    <img src={require(`../../../assets/images/${props.license.img}`)} alt={`${props.license.name} logo`} />
                </div>
            </header>
            <div className="row license-content">
                <div className="col-6 license-content-dueamount">
                    <p className="text-muted"><Translate text="dashboard.license.dueAmount"></Translate></p>
                    <p className="alert alert-success text-success p-1">{props.license.dueAmout} <Translate text="dashboard.license.currecySymbol"></Translate></p>
                </div>
                <div className="col-6 license-content-totalcount">
                    <p className="text-muted"><Translate text="dashboard.license.totalCount"></Translate></p>
                    <p>{props.license.totalCount}</p>
                </div>
            </div>
        </div>
    )
}

export default LicenseCard;