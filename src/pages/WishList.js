import { useEffect, useState } from 'react';
import '../scss/wishList.scss';
import {getWishList, deleteWishList, set} from '../api/api';

export default function WishList(){
    const [empty, setEmpty] = useState([]);

    useEffect(
        () => {
            const AddCourses = getWishList();
            setEmpty(AddCourses)
        }, []
    )
    console.log(empty);
    const deleteBtn = (courseSlug) =>{
        deleteWishList(courseSlug)  /* 내가 클릭하면 course.slug를 가져온다*/
        const nextCourse = getWishList();
        setEmpty(nextCourse);
    }
    return(
        <div id="wishlist">
            <ul>
                {
                    empty.map(
                        ({id}) =>{
                            <li key={id}>
                                <div><img src="" alt="" /></div>
                                <figure>
                                    <dl>
                                        <dt>이름</dt>
                                        <dd>가격</dd>
                                    </dl>
                                    <p>
                                        <button type="button"
                                            // onClick={deleteBtn(item.id)}
                                        >delete</button>
                                    </p>
                                </figure>
                            </li>
                        }
                    )
                }
                
            </ul>
        </div>
    );
}