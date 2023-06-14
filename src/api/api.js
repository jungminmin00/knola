import courses from './products.json';

export function getCourseBySlug(couseSlug){
    return courses.find((couse) => couse.slug === couseSlug)   
}

// 검증된 이름(WISHLIST_KEY), 속성값
const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}') /* 위시리스트에 담느냐 아니냐 */

export function getWishList(){
    return courses.filter((courses) => wishlist[courses.slug]);    /* 변수이기 때문에 인덱싱 기법이 들어간다. */
}
export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));   /*  */
}
export function deleteWishList(courseSlug){
    delete wishlist[courseSlug];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))    /* 지울것은 지우고 남아있는 것 */
}