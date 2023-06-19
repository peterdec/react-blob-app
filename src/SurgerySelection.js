import './css/SurgeonSelection.css';
import React, {useContext} from 'react';
import SelectionItem from './SelectionItem.js'
import { SessionContext } from './SessionContext';

function SurgerySelection(props) {

    const context = useContext(SessionContext)

    function setSurgery(name) {
        context.setActiveSurgeryType(name)
    }

    const selectionItems = context.surgeryList.map((surgery, index) => (
        <SelectionItem handleClick={setSurgery} key={index} name={surgery} />))




    return (
        <div className="SurgeonSelection">
            <h1 className="SelectionTitle OertliWhite">Chirurg:in auswählen</h1>
            <div className="SelectionContainer">
                {selectionItems}
            </div>


        </div>
    );
}



export default SurgerySelection;