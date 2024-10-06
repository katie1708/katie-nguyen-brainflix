import logo from "../assets/Logo/BrainFlix-logo.svg"
import upload from "../assets/Icons/upload.svg"
import avatar from "../assets/Images/Mohan-muruge.jpg"
import search from "../assets/Icons/search.svg"
import "./Header.scss"

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__search">
                <img className="header__search--img" src={search} />
                <input className="header__search--input" type="text" placeholder="Search">
                </input>
            </div>
            <img className="header__avatar" src={avatar}/>
            <button className="header__upload" type="submit">
                <img src={upload}/>
                <p>UPLOAD</p>
            </button>
        </header>
            
    )
}

export default Header;