export default function Header(){
    return(
        <header>
            <div id="header">
                <h1><a href="#"><img src="./images/logo.png" alt="knola" /></a></h1>
                <div className="sub">
                    <ul>
                        <li><a href="#">wishlist</a></li>
                        <li><a href="#">login</a></li>
                    </ul>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">brand</a></li>
                        <li className="store">
                            <a href="#">store</a>
                            <ul className="hide">
                            {/* <ul > */}
                                <li><a href="#">all</a></li>
                                <li><a href="#">granola</a></li>
                                <li><a href="#">snack</a></li>
                            </ul>
                        </li>
                        <li><a href="#">review</a></li>
                        <li><a href="#">event</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}