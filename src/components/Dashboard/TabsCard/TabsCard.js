import { Translate } from '../../../helpers/translate/Translate';

const TabsCard = (props) => {

    const toggleFavBtn = (log) => {
        props.onToggleFavBtn(log);
    }
    return (
        <div className="dashboard-card" key={props.log.id}>
            <header className="dashboard-card-header">
                <div className="dashboard-card-header-title">
                    <h3 className="mb-10 fw-bolder fs-5">{props.log.name}</h3>
                    <div className='dashboard-card-header-title-details'>
                        <span className={`alert p-1 ${props.log.logStatus === 'activeLog' ? 'alert-success' : 'alert-dark'}`}>
                            <span className='text-dark'> <Translate text="dashboard.card.logStatus"></Translate>: </span>
                            <span className={`fw-bold ${props.log.logStatus === 'activeLog' ? 'text-success' : 'text-dark'}`}><Translate text={`dashboard.card.${props.log.logStatus}`} /></span>
                        </span>
                        <span className={`alert p-1 ${props.log.logType === 'mainLog' ? 'alert-success' : 'alert-dark'}`}>
                            <span className='text-dark'> <Translate text="dashboard.card.logType"></Translate>: </span>
                            <span className={`fw-bold ${props.log.logType === 'mainLog' ? 'text-success' : 'text-dark'}`}><Translate text={`dashboard.card.${props.log.logType}`} /></span>
                        </span>
                    </div>
                </div>
                <div className="dashboard-card-header-actions">
                    <button className={`btn btn-outline-primary ${props.log.isFavourite ? 'active' : ''}`}
                        disabled={props.log.isDeleted} onClick={() => toggleFavBtn(props.log)}>
                        <i className="fa-regular fa-star"></i>
                    </button>
                    <button className="btn btn-outline-primary" type="button">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </header>
            <div className="dashboard-card-content">
                <section className="row">
                    <div className="col-3">
                        <div className="entity">
                            <div className='entity-icon'>
                                <i className="fa-solid fa-city text-info"></i>
                            </div>
                            <div className="entity-desc">
                                <p className="entity-desc-name">
                                    <Translate text="dashboard.card.businessEntityType"></Translate>
                                </p>
                                <p className="entity-desc-value"><Translate text={`dashboard.card.${props.log.type}`}></Translate></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="entity">
                            <div className="entity-icon">
                                <i className="fa-solid fa-calendar-days text-primary"></i>
                            </div>
                            <div className="entity-desc">
                                <p className="entity-desc-name">
                                    <Translate text="dashboard.card.expirationDate"></Translate>
                                </p>
                                <p className="entity-desc-value">{props.log.expirationDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="entity">
                            <div className="entity-icon">
                                <i className="fa-solid fa-signs-post text-primary"></i>
                            </div>
                            <div className="entity-desc">
                                <p className="entity-desc-name">
                                    <Translate text="dashboard.card.buildingNo"></Translate>
                                </p>
                                <p className="entity-desc-value">{props.log.buildingNo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="entity">
                            <div className="entity-icon">
                                <i className="fa-regular fa-file-lines text-info"></i>
                            </div>
                            <div className="entity-desc">
                                <p className="entity-desc-name">
                                    <Translate text="dashboard.card.commercialLogNo"></Translate>
                                </p>
                                <p className="entity-desc-value">{props.log.commercialLogNo}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='dashboard-card-actions'>
                <button className="btn btn-outline-primary"><Translate text="dashboard.card.showEditLog"></Translate></button>
            </div>
        </div>
    )
}

export default TabsCard;