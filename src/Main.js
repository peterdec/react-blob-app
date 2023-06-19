import './css/Main.css';
import React, {useState, useContext} from 'react';
import SurgeonSelection from './SurgeonSelection';
import SurgerySelection from './SurgerySelection';
import { SessionContext } from './SessionContext';
import SurgeryMode from './SurgeryMode';



function Main(props) {

    const context = useContext(SessionContext)

    return (
        <main className="MainBody OertliAnthracite">
            {!props.surgeon && <SurgeonSelection />}
            {(props.surgeon && !props.surgery) && <SurgerySelection />}
            {(props.surgeon && props.surgery) && <SurgeryMode />}


        </main>
    );
}



export default Main;