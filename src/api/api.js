import courses from './products.json';

export function getCourseBySlug(couseSlug){
    return courses.find((couse) => couse.slug === couseSlug)   
}