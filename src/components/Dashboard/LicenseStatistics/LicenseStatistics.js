import LicenseCard from '../LicenseCard/LicenseCard';
const LicenseStatistics = () => {
    const licenses = require('../../../assets/json/LicenseStatistics.json').licenses;
    return (
        <div className="row g-3 mb-4">
            {
                licenses.map(license => <div className="col-4" key={license.id}><LicenseCard license={license}></LicenseCard></div>)
            }
        </div>
    )
}

export default LicenseStatistics;