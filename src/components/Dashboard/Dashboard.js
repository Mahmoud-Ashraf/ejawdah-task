import { useState } from 'react';
import { Translate } from '../../helpers/translate/Translate';
import LicenseStatistics from './LicenseStatistics/LicenseStatistics';
import Tabs from './Tabs/tabs';
import TabsContent from './TabsContent/TabsContent';

const Dashboard = () => {
    const commercialLogsList = require("../../assets/json/commercialLogsList.json").logsList;
    const [selectedTab, setSelectedTab] = useState('all');
    const [filteredLogsList, setFilteredLogsList] = useState(commercialLogsList);
    const changeTabHandler = (tab) => {
        setSelectedTab(tab);
        const filteredLogs = commercialLogsList.filter((logList) => {
            if (tab === 'favoriteLogs') {
                return logList.isFavourite;
            } else if (tab === 'subLogs') {
                return logList.logType === 'subLog';
            } else if (tab === 'firmLogsNo') {
                return logList.type === 'firm';
            } else {
                return logList;
            }
        });
        setFilteredLogsList(filteredLogs);
    }

    const toggleFavBtnHandler = (selectedLog) => {
        let mappedFilterdLogs = filteredLogsList.map(log => {
            if (log.id === selectedLog.id) {
                log.isFavourite = !log.isFavourite;
            }
            return log;
        });
        setFilteredLogsList(mappedFilterdLogs);
        changeTabHandler(selectedTab);
    }
    return (
        <div className="dashboard">
            <div className='dashboard-header'>
                <h2><Translate text="dashboard.headers.commercialLogsList"></Translate></h2>
            </div>

            <Tabs filteredLogsLength={filteredLogsList.length} onTabChange={changeTabHandler}></Tabs>

            <TabsContent filteredLogsList={filteredLogsList} onToggleFavBtn={toggleFavBtnHandler}></TabsContent>
            
            <div className='dashboard-header'>
                <h2><Translate text="dashboard.headers.licenseStatistics"></Translate></h2>
            </div>

            <LicenseStatistics></LicenseStatistics>


        </div>
    );
}

export default Dashboard;