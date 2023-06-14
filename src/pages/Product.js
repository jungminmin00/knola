import '../scss/product.scss';
import { getCourseBySlug } from '../api/api';
import { useParams } from 'react-router';
import { useState } from 'react';

export default function Product(){
    const {couseSlug} = useParams();
    const course = getCourseBySlug(couseSlug);
    // console.log(course.topic);
    const [reviewData, setReviewData] = useState(course.topic);
    console.log(reviewData);
    return(
        <div id='product'>
            <div>
                <figure>
                    <div>
                        <img src={`.${course.pic}`} alt={course.name} />
                    </div>
                    <figcaption>
                        <dl>
                            <dt>{course.name}</dt>
                            <dd>{course.price} 원</dd>
                        </dl>
                        <p><button type='button'>장바구니 추가</button></p>
                    </figcaption>
                </figure>
                <div id='review'>
                    <ul>
                        {reviewData.map(
                            ({review}) => ( /* key값 에러 :  중괄호 넣어 해결! */
                                <li key={review.reId}>
                                    <dl>
                                        <dt>{review.title}</dt>
                                        <dd>{review.detail}</dd>
                                        <dd>{review.date}</dd>
                                    </dl>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}