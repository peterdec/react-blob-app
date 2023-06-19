import './css/Splash.css';
import React from 'react';
import splashImg from './assets/images/Splash.png'

function Splash(props) {

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

    /*React.useEffect(() => {
        levels.forEach(level => {
            setTimeout(() => {
                setProgress(level);
            }, "1000")
    
        } )
    })*/

    return (
        <div onLoad={progressBarProgress} className="Splash">
            <header className="Splash-header">
                <img src={splashImg} className="SplashImg" />
            </header>


            <div className="SystemStartLoader">
                <div className="SystemStartLoaderText">
                    <span>System startet...</span>
                    <span>{progress}%</span>


                </div>
                <div className="SystemStartLoaderBarBG OertliDarkGrey">
                    <div style={progressBarFGStyle} className="SystemStartLoaderBarFG">

                    </div>
                </div>
            </div>
        </div>
    );
}



export default Splash;