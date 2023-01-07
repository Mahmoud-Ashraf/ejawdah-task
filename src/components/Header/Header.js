import Logo from "../../assets/images/Logo.svg";
import { Translate } from "../../helpers/translate/Translate";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
const Header = () => {
    const [lang, setLang] = useState('en');
    const globalLang = useSelector(state => {
        return state.globalLang
    });
    useEffect(() => {
        setLang(globalLang);
    }, [globalLang]);
    const dispatch = useDispatch();

    const changeLang = (event) => {
        dispatch({ type: event.target.value });
    }
    return (
        <div className="sidebar-header">
            <div className="sidebar-header-logo d-flex justify-content-center py-3">
                <img src={Logo} className="w-100" alt={<Translate text='sidebar.logoAlt'></Translate>} />
            </div>

            <div className="sidebar-header-user">
                <div className="d-flex justify-content-between mb-3">
                    <p className="text-white fs-4 mb-0">
                        <Translate text='sidebar.hello'></Translate>
                    </p>
                    <select className="form-select w-50" value={lang} onChange={changeLang}>
                        <option value="ar">عربي</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <p className={`sidebar-header-user-info text-white d-flex justify-content-between ${globalLang === 'en' ? 'left-0' : 'right-0'}`}>
                    <span><i className="fa-regular fa-user"></i> <Translate text='sidebar.user'></Translate></span>
                    <button className={`sidebar-header-user-logout ${globalLang === 'ar' ? 'fa-flip-horizontal' : ''}`}>
                        <i className="fa-solid text-white fa-arrow-right-from-bracket"></i>
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Header;