import { useState } from 'react';
import data from '../api/products.json';
import $ from 'jquery';
import './Review_';
export default function(){
    const [reviewData, setReviewData] = useState([]);
    console.log(data[1].topic)
    
    // topic반복문으로 가져오기 => map으로 하기

    return(
        <div id="review">
            <h3>REVIEW</h3>
            <p>상품 사용후기입니다.</p>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    );
}