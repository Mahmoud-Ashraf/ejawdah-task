import { useState } from 'react';
import { Translate } from '../../../helpers/translate/Translate';
import { useSelector } from 'react-redux'

const Tabs = (props) => {
    const translation = useSelector(state => {
        return state.translation
    });
    const [selectedTab, setSelectedTab] = useState('all')
    const tabs = Object.keys(translation.dashboard.tabs);
    const changeTab = (tab) => {
        setSelectedTab(tab);
        props.onTabChange(tab);
    }
    return (
        <div className="dashboard-tabs">
            {tabs.map((tab) => {
                return <div key={tab} className={`dashboard-tab ${selectedTab === tab ? 'active' : ''}`} onClick={() => changeTab(tab)}>
                    <Translate text={`dashboard.tabs.${tab}`}></Translate> {selectedTab === tab && props.filteredLogsLength}
                </div>
            })}
        </div>
    )
}

export default Tabs;