import './WelcomePage.css';
import video1 from '../WelcomePage/My Video.mp4';
const WelcomePage = () => {
    return (
        <div id="home">
            <video className="videoTag" autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
        </div>
    );
};

export default WelcomePage;
