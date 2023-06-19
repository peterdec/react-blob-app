import './css/SurgeonSelection.css';
import React, {useContext} from 'react';
import SelectionItem from './SelectionItem.js'
import { SessionContext } from './SessionContext';



function SurgeonSelection(props) {

    const context = useContext(SessionContext)

    function setUser(name) {
        context.setActiveSurgeonUser(name)
    }

    const selectionItems = context.surgeonList.map((surgeon, index) => (
        <SelectionItem handleClick={setUser} key={index} name={surgeon} />))

    return (
        <div className="SurgeonSelection">
            <h1 className="SelectionTitle OertliWhite">Chirurg:in auswählen</h1>
            <div className="SelectionContainer">
                {selectionItems}
            </div>


        </div>
    );
}



export default SurgeonSelection;