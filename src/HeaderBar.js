import './css/HeaderBar.css';
import cogIcon from './assets/icons/cog.svg'
import line from './assets/icons/line5.svg'
import chevron from './assets/icons/chevron.svg'
import React, {useContext} from 'react';
import HeaderDeviceStatus from './HeaderDeviceStatus'
import { SessionContext } from './SessionContext';

function HeaderBar(props) {

    const context = useContext(SessionContext);

    const [progress, setProgress] = React.useState(3)
    const levels = [5, 21, 64, 88, 100]
    const progressBarFGStyle = {
        width: `${progress}%`
    }

    function progressBarProgress() {
        let time = 0;
        levels.forEach(level => {
            let blob = setTimeout(() => {

                setProgress(level);

                if (level === 100) {
                    props.turnOff();
                }
            }, time + 1000);
            time += 1000;

        } )
        

    };


    return (
        <nav className="HeaderBar">
            {context.activeSurgeonUser && <div className="HeaderSurgeon">
                <h2 className="HeaderSurgeonName">{context.activeSurgeonUser}</h2>
                <img src={chevron} />
            </div>}
            {context.activeSurgeryType && <img src={line} />}
            {context.activeSurgeryType && <div className="HeaderSurgery">
                <h2 className="HeaderSurgeryType">{context.activeSurgeryType}</h2>
                <img src={chevron} />
            </div>}

            <HeaderDeviceStatus />
            <img className="HeaderSettingsCog" src={cogIcon} />

        </nav>
    );
}



export default HeaderBar;