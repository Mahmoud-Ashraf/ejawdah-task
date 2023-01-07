import { Translate } from "../../../helpers/translate/Translate";
import { Link } from "react-router-dom";

const SidebarLinks = () => {
    return (
        <div className="sidebar-links-wrapper">
            <ul className="sidebar-links list-unstyled p-0">
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-house"></i> <Translate text="sidebar.home"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-file-import"></i> <Translate text="sidebar.recivedRequests"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-file-lines"></i> <Translate text="sidebar.myRequests"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-map"></i> <Translate text="sidebar.adressesLog"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-user-plus"></i> <Translate text="sidebar.authorization"></Translate>
                    </Link>
                </li>
            </ul>
            <h4 className="fw-bold fs-5 text-white opacity-25 text-capitalize mb-2">
                <Translate text="sidebar.electronicServices"></Translate>
            </h4>
            <ul className="sidebar-links list-unstyled p-0">
                <li className="sidebar-links-link">
                    <Link to='reserved-name-request' className="text-decoration-none">
                        <i className="fa-solid fa-file-signature"></i> <Translate text="sidebar.commercialNameBooking"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-address-card"></i> <Translate text="sidebar.renewCommercialLog"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <i className="fa-solid fa-trash-can"></i> <Translate text="sidebar.deleteCommercialLog"></Translate>
                    </Link>
                </li>
            </ul>
            <h4 className="fw-bold fs-5 text-white opacity-25 text-capitalize mb-2">
                <Translate text="sidebar.otherLinks"></Translate>
            </h4>
            <ul className="sidebar-links list-unstyled p-0">
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <Translate text="sidebar.businessPlatform"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <Translate text="sidebar.electronicServices"></Translate>
                    </Link>
                </li>
                <li className="sidebar-links-link">
                    <Link to='/' className="text-decoration-none">
                        <Translate text="sidebar.contactUs"></Translate>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarLinks;