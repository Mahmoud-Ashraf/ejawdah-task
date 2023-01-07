import TabsCard from "../TabsCard/TabsCard";

const TabsContent = (props) => {

    const toggleFavBtnHandler = (log) => {
        props.onToggleFavBtn(log)
    }
    return (
        <div className="dashboard-cards">
            {
                props.filteredLogsList.map((log) => {
                    return (
                        <TabsCard key={log.id} log={log} onToggleFavBtn={toggleFavBtnHandler}></TabsCard>
                    )
                })
            }
        </div>
    )
}

export default TabsContent;