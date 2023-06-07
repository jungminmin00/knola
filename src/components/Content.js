import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

export default function Content(){
    return(
        /* content */
        <div id="content">
            {/* gallery */}
            <div className="gallery">
                <div className="show">
                    <div className="all">
                        <ul>
                            <li><img src="" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <p className="prev"><button type="button"><AiOutlineLeft /></button></p>
                <p className="next"><button type="button"><AiOutlineRight /></button></p>
            </div>
            {/* ment */}
            <div className='ment'>
                <dl>
                    <dt>Knola Philosophy</dt>
                    <dd>
                        <ul>
                            <li>'When you eat better, you feel better'</li>
                            <li>모토로 프리미엄 간식의</li>
                            <li>즐거운 미식 경험을 제안합니다</li>
                        </ul>
                    </dd>
                    <dd>
                        모든 과정은 수제로 만들어지며, 대량 생산 공장에서 구현할 수 없는 퀄리티를 구현하고자 합니다.<br/>
                        크놀라가 추구하는 방향에 기꺼이 함께 하실 수 있는 브랜드가 될 수 있도록 꾸준히 성장하는 모습 보여드리겠습니다
                    </dd>
                </dl>
            </div>
            {/* section */}
            <div className='section'>
                {/* 1 */}
                <section>
                    <figure>
                        <img src='' alt=''/>
                        <figcaption></figcaption>
                    </figure>
                </section>
                {/* 2 */}
                <section>
                    <figure>
                        <img src='' alt=''/>
                        <figcaption></figcaption>
                    </figure>
                </section>
                {/* 3 */}
                <section>
                    <figure>
                        <img src='' alt=''/>
                        <figcaption></figcaption>
                    </figure>
                </section>
            </div>
            {/* bestProducts */}
            <div className='bestProducts'>
                <h3>best Products</h3>
                <p>크놀라의 인기상품입니다</p>
                <ul>
                    {/* 1 */}
                    <li>
                        <figure>
                            <img src='' alt=''/>
                            <figcaption>
                                <dl>
                                    <dt></dt>
                                    <dd></dd>
                                </dl>
                            </figcaption>
                        </figure>
                    </li>
                    {/* 2 */}
                    {/* 3 */}
                    {/* 4 */}
                </ul>
            </div>
            <div className='banner'>
                <figure>
                    <img src='' alt=''/>
                    <figcaption>
                        <h3>About Knola</h3>
                        <p> 
                            맛있는 프리미엄 그래놀라 브랜드<br/>
                            Knola(크놀라)의 그래놀라는 100% 수제 그래놀라입니다.<br/>
                            뉴욕에서 시작된 크놀라의 특별한 100% 핸드메이드 방식, 철저한 공정을 통해<br/>
                            항상 신선하고 건강한 그래놀라를 만들고 있습니다.
                        </p>
                        <p><button type='button'>Knola Story</button></p>
                    </figcaption>
                </figure>
            </div>
        
        </div>
    );
}