import SdaiaLogo from "../../assets/images/sdaia-logo.webp";
import { Translate } from "../../helpers/translate/Translate";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-center footer-img">
                <img className="w-50" src={SdaiaLogo} alt="sdaia logo" />
            </div>
            <p className="footer-developedby"><Translate text="sidebar.footer"></Translate></p>
            <p className="footer-copy-rights mb-0"><Translate text="sidebar.copyRights"></Translate></p>
        </footer>
    )
}

export default Footer;