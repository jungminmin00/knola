import { useState } from 'react';
import {AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai';
import {BsCheckSquare} from 'react-icons/bs';

function Dropdown({toggle}){
    if(!toggle){
        return null;
    }
    return(
        <ul className='btn'>
            <li>인기순 <BsCheckSquare /></li>
            <li>최신순 <BsCheckSquare /></li>
            <li>높은가격 <BsCheckSquare /></li>
            <li>낮은가격 <BsCheckSquare /></li>
        </ul>
    );
}
export default function Search(){
    const [toggle, setToggle] = useState(false);

    return(
        <div id="search">
            <div>
                <AiOutlineSearch />
                <input type="text" placeholder="상품 이름 입력" />
            </div>
            <button type="button"
                onClick={() => setToggle(!toggle)}
            ><AiFillCaretDown /></button>
            <Dropdown 
                toggle = {toggle}
            />
        </div>
    );
}