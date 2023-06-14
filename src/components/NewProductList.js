import { useState } from 'react';
import data from '../api/products.json';

export default function NewProductList(){
    // const [newSort, setNewSort] = useState('birth');

    const newData = data.sort(
        (a, b) => {
          return (a['birth'] > b['birth'] ? -1 : 1);
        }
      );  
    newData.length = 4;
    
    return(
        <ul>
            {
                newData.map((item) => ( 
                    <li
                        key={item.birth}
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
                    
                     
                ))
                
            }
            
        </ul>
    );
}