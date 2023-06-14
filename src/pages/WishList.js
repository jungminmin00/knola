import { useEffect, useState } from 'react';
import '../scss/wishList.scss';
import {getWishList, deleteWishList, set} from '../api/api';

export default function WishList(){
    const [courses, setCourses] = useState([]); // 계속 추가되고 없어지기 때문에 필요 - 빈 배열로 시작
  useEffect(() => {
    const NestCourses = getWishList();
    setCourses(NestCourses)
  }, []) /* 있는것들을 변경해야하기 때문 / 결과값을 가져온다. */

  const handleDelete = (courseSlug) =>{
    deleteWishList(courseSlug)  /* 내가 클릭하면 course.slug를 가져온다*/
    const nextCourse = getWishList();
    setCourses(nextCourse);
  }
  return(
    <div id="wishlist">
      <h1>나의 저장소</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.slug}>
            <div><img src={course.pic} alt={course.name} /></div>
            <figure>
                <dl>
                    <dt>{course.name}</dt>
                    <dd>{course.price}원</dd>
                </dl>
                <p>
                    <button 
                        type="button"
                        onClick={() => handleDelete(course.slug)}              
                    >버리기</button>
                </p>
            </figure>
            
          </li>
        ))}
      </ul>
      
    </div>
    
    );
}