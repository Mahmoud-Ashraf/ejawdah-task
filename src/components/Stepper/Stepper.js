import { Translate } from "../../helpers/translate/Translate";
import { useSelector } from 'react-redux'

const Stepper = (props) => {
    const translation = useSelector(state => {
        return state.translation
    });
    const steps = Object.keys(translation.stepper);
    return (
        <div className="stepper row">
            {steps.map((step, i) => {
                return (
                    <div key={i} className={`stepper-step col ${i === props.selectedStep ? 'active' : ''}`}>
                        <div className="stepper-step-details">
                            <div className="stepper-step-details-number">{i + 1}</div>
                            <div className="stepper-step-details-name"><Translate text={`stepper.${step}`}></Translate></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Stepper;