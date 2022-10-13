import './Intro.css';
const Intro = () => {
    return (
        <div className="history">
            <ul className="navigation">
                <a href="#home">
                    <li className="about-us">About</li>
                </a>
                <li className="contact">Contatct</li>
                <a href="#shop">
                    <li className="shop">Shop</li>
                </a>
            </ul>
        </div>
    );
};

export default Intro;
