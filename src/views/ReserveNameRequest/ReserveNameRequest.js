import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SelectCommercialName from "../../components/SelectCommercialName/SelectCommercialName";
import Stepper from "../../components/Stepper/Stepper";
import { Translate } from "../../helpers/translate/Translate";
import { Link } from "react-router-dom";
import RequestSent from "../../components/RequestSent/RequestSent";
import AddedCommercials from "../../components/AddedCommercials/AddedCommercials";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ReservedNameRequest = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [commercialNames, setCommercialNames] = useState([]);
    const nextStep = () => {
        setCurrentStep((prev) => {
            return prev + 1;
        });
    }
    const addCommercialNameHandler = (commercialName) => {
        setCommercialNames([...commercialNames, commercialName]);
        console.log(commercialNames);
    }

    const deleteCommercialNameHandler = (id) => {
        setCommercialNames((prev) => {
            prev = prev.filter((commercialName) => commercialName.id !== id);
            return prev;
        })
    }
    return (
        <div className="reserve-name-request">
            <Header />
            <div className="reserve-name-request-wrapper">
                <div className="reserve-name-request-stepper">
                    <div className="custom-white-box">
                        <Breadcrumb></Breadcrumb>
                        <h2><Translate text="breadcrumb.reserveCommercialNameRequest"></Translate></h2>
                        <Stepper selectedStep={currentStep}></Stepper>
                    </div>
                </div>
                <div className="reserve-name-request-content">
                    {
                        currentStep === 0
                            ?
                            <div className="custom-white-box">
                                <SelectCommercialName onAddCommercialName={addCommercialNameHandler}></SelectCommercialName>
                                <AddedCommercials onDeleteCommercialName={deleteCommercialNameHandler} commercialNames={commercialNames}></AddedCommercials>
                                <div className="row justify-content-end mt-5">
                                    <div className="col-2">
                                        <button className="btn btn-primary w-100" onClick={nextStep} disabled={commercialNames.length === 0}><Translate text="reserveNameRequestForm.next"></Translate></button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="custom-white-box">
                                <RequestSent></RequestSent>
                            </div>
                    }
                </div>
                <div className="reserve-name-request-actions">
                    {
                        currentStep === 0
                        &&
                        <div className="row justify-content-end">
                            <div className="col-2">
                                <Link to="/">
                                    <button className="btn btn-link w-100 text-dark text-decoration-none"><i className="fa-solid fa-xmark text-danger"></i> <Translate text="reserveNameRequestForm.cancel"></Translate></button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReservedNameRequest;