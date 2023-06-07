export default function Header(){
    return(
        <header>
            <div id="header">
                <h1><a href="#"><img src="" alt="" /></a></h1>
                <div className="sub">
                    <ul>
                        <li><a href="#">wishlist</a></li>
                        <li><a href="#">login</a></li>
                    </ul>
                    <nav>
                        <ul>
                            <li><a href="#">brand</a></li>
                            <li>
                                <a href="#">store</a>
                                <ul>
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
            </div>
        </header>
    );
}