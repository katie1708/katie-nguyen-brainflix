import logo from "../assets/Logo/BrainFlix-logo.svg"
import upload from "../assets/Icons/upload.svg"
import avatar from "../assets/Images/Mohan-muruge.jpg"
import search from "../assets/Icons/search.svg"
import "./Header.scss"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo"><img src={logo} alt="logo"/></Link>
            <div className="header__search">
                <img className="header__search--img" src={search} />
                <input className="header__search--input" type="text" placeholder="Search">
                </input>
            </div>
            <p className="header__avatar" src={avatar}></p>
            <Link className="header__upload--link" to="/upload">
                <button className="header__upload" type="submit">
                    <img src={upload}/>
                    <p>UPLOAD</p>
                </button>
            </Link>
        </header>
            
    )
}

export default Header;