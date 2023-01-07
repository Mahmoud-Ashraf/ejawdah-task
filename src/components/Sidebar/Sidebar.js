

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SidebarLinks from "./SidebarLinks/SidebarLinks";

const Sidebar = () => {

    return (
        <aside className="sidebar h-100 d-flex flex-column justify-content-between">

            <div className="sidebar-top">
                <Header />
                <SidebarLinks />
            </div>
            <div className="sidebar-bottom">
                <Footer />
            </div>

        </aside>
    )
}

export default Sidebar;