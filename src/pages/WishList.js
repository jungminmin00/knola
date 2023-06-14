import '../scss/wishList.scss';

export default function WishList(){
    return(
        <div id="wishlist">
            <ul>
                <li>
                    <div><img src="" alt="" /></div>
                    <figure>
                        <dl>
                            <dt>이름</dt>
                            <dd>가격</dd>
                        </dl>
                        <p>
                            <button type="button">delete</button>
                        </p>
                    </figure>
                </li>
            </ul>
        </div>
    );
}