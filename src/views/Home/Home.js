import Dashboard from "../../components/Dashboard/Dashboard";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Home;