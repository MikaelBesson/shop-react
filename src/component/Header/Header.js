
import './Header.css';
import logo from '../../assets/img/logo.png';
import {findAllByDisplayValue} from "@testing-library/react";

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