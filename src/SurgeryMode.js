import './css/SurgeryMode.css';
import React, {useContext} from 'react';
import { SessionContext } from './SessionContext';
import SurgeryStep from './SurgeryStep';



function SurgeryMode(props) {

    const context = useContext(SessionContext)

    function setUser() {
        context.setActiveSurgeonUser(props.name)
    }


    return (

        <div className="SurgeryStepsContainer">
            <SurgeryStep name="Pre-OP" />
            <SurgeryStep name="Phaco 1" />
            <SurgeryStep name="IA 1 | 2" />
            <SurgeryStep name="Post-OP" />
            <SurgeryStep name="Pre-OP" />
        </div>

    );

}

export default SurgeryMode;