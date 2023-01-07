import { Translate } from "../../helpers/translate/Translate";

const AddedCommercials = (props) => {
    const deleteCommercialName = (id) => {
        props.onDeleteCommercialName(id);
    }
    return (
        <div className="row mt-5 gy-3">
            {
                props.commercialNames.map((commercialName) => {
                    return (
                        <div key={commercialName.id} className="col-6">
                            <div className="commercial-name">
                                <div className="commercial-name-header">
                                    <h5><Translate text="reserveNameRequestForm.fullCommercialName"></Translate></h5>
                                    <span onClick={() => deleteCommercialName(commercialName.id)}><Translate text="reserveNameRequestForm.delete"></Translate> <i className="fa-solid fa-xmark"></i></span>
                                </div>
                                <div className="commercial-name-content">
                                    <p className="mb-0"><Translate text={`select.buildingTypes.${commercialName.buildingType}`}></Translate> {commercialName.ownerName} <Translate text={`select.activityTypes.${commercialName.activityType}`}></Translate></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AddedCommercials;