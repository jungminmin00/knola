import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineCloseSquare} from "react-icons/ai"

export default function Header(){
    return(
        <header>
            <div id="header">
                <h1>
                    <Link to="/"><img src="./images/logo.png" alt="knola" /></Link>
                </h1>
                
                <p><GiHamburgerMenu /></p>
            </div>
            <div>
                    <div className="sub">
                        <ul>
                            <li>
                                <Link to="wishlist">wishlist</Link>
                            </li>
                            <li><Link to="login">login</Link></li>
                        </ul>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="brand">brand</Link></li>
                            <li className="store">
                                <Link to="list">store</Link>
                                <ul className="hide">
                                {/* <ul > */}
                                    <li><a href="#">all</a></li>
                                    <li><a href="#">granola</a></li>
                                    <li><a href="#">snack</a></li>
                                </ul>
                            </li>
                            <li><Link to="review">review</Link></li>
                            <li><Link to="event">event</Link></li>
                        </ul>
                    </nav>
                    <p><AiOutlineCloseSquare /></p>
                </div>
        </header>
    );
}