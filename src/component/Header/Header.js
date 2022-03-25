
import './Header.css';
import logo from '../../assets/img/logo.png';

export const Header = function () {

    return (
        <div className="Header">
            <img src={logo} alt="shop logo"/>
            <div>
                <h1>Welcome to my shop</h1>
            </div>
        </div>
    );
};