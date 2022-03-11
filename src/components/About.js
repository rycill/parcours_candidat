import managerimg from '../res/manager.jpg'
import Sparkle from 'react-sparkle'
import './About.css'
 
function About(props) {
    return (
        <div className="rainbow">   
            <Sparkle minSize={15} maxSize={20}/>
            <div><img src={managerimg}></img></div>
            <audio autoPlay loop controls="controls">
                <source src="https://ladiscoteca.net/imprescindibles/Barry/10%20-%20Never%2C%20Never%20Gonna%20Give%20You%20Up.mp3" type="audio/mp3"/>     
            </audio>
        </div>
    );
}
export default About;
