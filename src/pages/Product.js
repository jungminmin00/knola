import '../scss/product.scss';

export default function Product(){
    return(
        <div id='product'>
            <div>
                <figure>
                    <div>
                        <img src='' alt='' />
                    </div>
                    <figcaption>
                        <dl>
                            <dt>이름</dt>
                            <dd>가격</dd>
                        </dl>
                        <p><button type='button'>장바구니 추가</button></p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}