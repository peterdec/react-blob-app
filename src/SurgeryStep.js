import './css/SurgeryMode.css';
import React, {useContext} from 'react';
import { SessionContext } from './SessionContext';



function SurgeryStep(props) {

    const context = useContext(SessionContext)

    function setUser() {
        context.setActiveSurgeonUser(props.name)
    }


    return (

        <h3 className="SurgeryStepLabel">{props.name}</h3>

    );

}

export default SurgeryStep;
