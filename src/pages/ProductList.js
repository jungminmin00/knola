import '../scss/productList.scss';
import Search from '../components/Search';
import data from '../api/products.json';
import { useState } from 'react';

function Products({item}){
    return(
        <li
            key={item.id}
        >
            <figure>
                <img src={item.pic} alt={item.name}/>
                <figcaption>
                    <dl>
                        <dt>{item.name}</dt>
                        <dd>{item.price}원</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
    );
}

export default function ProductList(){
    const [datas, setDatas] = useState(data);
    const [sortBy, setSortBy] = useState('salesNumber');
    const [word, setWord] = useState('');

    const list = datas.sort(
        (a, b) => {
            return (a[sortBy] > b[sortBy] ? -1 : 1);
        }
    )
    
    return(
        <div id="productList">
            <Search 
                sortBy = {sortBy}
                setSortBy = {setSortBy}
            />
            <div className='item'>
                <ul>
                    {
                        list.map((item) => (
                            <Products 
                                key={item.id}
                                item = {item}
                                word = {word}                                
                                setWord = {setWord}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}