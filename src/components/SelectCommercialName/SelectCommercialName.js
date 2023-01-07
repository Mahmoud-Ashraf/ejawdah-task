import { useState } from "react";
import { Translate } from "../../helpers/translate/Translate";
import { useSelector } from 'react-redux'

const SelectCommercialName = (props) => {
    const translation = useSelector(state => {
        return state.translation
    });
    const buildingTypes = Object.keys(translation.select.buildingTypes);
    const activityTypes = Object.keys(translation.select.activityTypes);
    const [buildingType, setBuildingType] = useState('center');
    const [activityType, setActivityType] = useState('commerce');
    const [ownerName, setOwnerName] = useState('');
    const [commercialNameType, setCommercialNameType] = useState('');
    const commercialNameTypeChange = (e) => {
        setCommercialNameType(e.target.value);
    }
    const ownerNameChange = (e) => {
        setOwnerName(e.target.value);
    }
    const activityTypeChange = (e) => {
        setActivityType(e.target.value);
    }
    const buildingTypeChange = (e) => {
        setBuildingType(e.target.value);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        const commercialNameToAdd = {
            id: Math.random()*1000,
            buildingType: buildingType,
            activityType: activityType,
            ownerName: ownerName
        }
        setOwnerName('');
        props.onAddCommercialName(commercialNameToAdd);
    }
    return (
        <div className="row">
            <form onSubmit={submitFormHandler}>
                <div className="col-12">
                    <header><h2><Translate text="reserveNameRequestForm.commercialName"></Translate> <span className="radio-label-icon"><i className="fa-solid fa-info"></i></span></h2></header>

                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-label fs-5"><Translate text="reserveNameRequestForm.selectCommercialNameType"></Translate></div>
                                </div>
                                <div className="col-6">
                                    <div className={`form-check border p-4 ${commercialNameType === 'special'? 'border-primary': ''}`}>
                                        <input className="form-check-input" type="radio" name="commercialNameType" id="specialName" required value="special" onChange={commercialNameTypeChange} />
                                        <label className="form-check-label fs-5" htmlFor="specialName">
                                            <Translate text="reserveNameRequestForm.specialName"></Translate> <span className="radio-label-icon"><i className="fa-solid fa-info"></i></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={`form-check border p-4 ${commercialNameType === 'suggested'? 'border-primary': ''}`}>
                                        <input className="form-check-input" type="radio" name="commercialNameType" id="suggestedName" required value="suggested" onChange={commercialNameTypeChange} />
                                        <label className="form-check-label fs-5" htmlFor="suggestedName">
                                            <Translate text="reserveNameRequestForm.suggestedName"></Translate> <span className="radio-label-icon"><i className="fa-solid fa-info"></i></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <p className="m-0 fs-5"><Translate text="reserveNameRequestForm.pleaseSelectPreviousForwardWord"></Translate></p>
                                </div>
                                <div className="col-6">
                                    <label className="form-label"><Translate text="reserveNameRequestForm.buldingType"></Translate> "<Translate text="reserveNameRequestForm.previousWord"></Translate>"</label>
                                    <select className="form-select form-select-lg" required value={buildingType} onChange={buildingTypeChange}>
                                        {
                                            buildingTypes.map((buildingType) => {
                                                return (
                                                    <option key={buildingType} value={buildingType}>
                                                        <Translate text={`select.buildingTypes.${buildingType}`}></Translate>
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label"><Translate text="reserveNameRequestForm.activityType"></Translate> "<Translate text="reserveNameRequestForm.forwardWord"></Translate>"</label>
                                    <select className="form-select form-select-lg" required value={activityType} onChange={activityTypeChange}>
                                        {
                                            activityTypes.map((activityType) => {
                                                return (
                                                    <option key={activityType} value={activityType}><Translate text={`select.activityTypes.${activityType}`}></Translate></option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label"><Translate text="reserveNameRequestForm.exampleForCommercialName"></Translate></label>
                                </div>
                                <div className="col-12">
                                    <div className="commercial-name-example">
                                        <div className="previous-word">
                                            <label className="form-label"><Translate text="reserveNameRequestForm.previousWord"></Translate></label>
                                            <div className="example-value"><Translate text={`select.buildingTypes.${buildingType}`}></Translate></div>
                                        </div>
                                        <div className="commercial-name-example-sperator"></div>
                                        <div className="owner-name">
                                            <label className="form-label"><Translate text="reserveNameRequestForm.ownerName"></Translate></label>
                                            <div className="example-value">
                                                {
                                                    !ownerName
                                                    ?
                                                    <Translate text="reserveNameRequestForm.projectOwnerName"></Translate>
                                                    :
                                                    ownerName
                                                }
                                            </div>
                                        </div>
                                        <div className="commercial-name-example-sperator"></div>
                                        <div className="forward-word">
                                            <label className="form-label"><Translate text="reserveNameRequestForm.forwardWord"></Translate></label>
                                            <div className="example-value"><Translate text={`select.activityTypes.${activityType}`}></Translate></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="form-label"><Translate text="reserveNameRequestForm.ownerName"></Translate></label>
                            <div className="row">
                                <div className="col-8">
                                    <input className="form-control" value={ownerName} required onChange={ownerNameChange} />
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-outline-primary w-100" type="submit"><i className="fa-solid fa-plus"></i> <Translate text="reserveNameRequestForm.addName"></Translate></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    )
}

export default SelectCommercialName;