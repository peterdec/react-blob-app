
import './css/SurgeonSelection.css';
import React, {useContext} from 'react';
import { SessionContext } from './SessionContext';


function SelectionItem(props) {

    const context = useContext(SessionContext)

    function setSelection() {
        //context.setActiveSurgeonUser(props.name)
        props.handleClick(props.name)
    }

/*  <div onClick={setUser} className="SelectionItem">
            <h2>{props.name}</h2>
        </div>*/
    return (

        <div onClick={setSelection} className="SelectionItem">
            <h2>{props.name}</h2>
        </div>

    );

}

export default SelectionItem;