import React from 'react';
import StatusCircle from './assets/icons/statusCircle.svg'

function HeaderDeviceStatus(props) {

    return (
        <div className="HeaderDeviceStatus">
            <img className="HeaderDeviceStatusCircle" src={StatusCircle} />
            <h1>Gerät bereit</h1>
        </div>
    )

}

export default HeaderDeviceStatus;