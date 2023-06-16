import { Link } from 'react-router-dom';
import data from '../api/event.json';
import { useState } from 'react';
import '../scss/eventList.scss';

export default function EventList(){
    console.log(data);
    const [sortBy, setSortBy] = useState('slug');

    const list = data.sort(
        (a, b)=>{
            return a[sortBy]>b[sortBy]? -1 : 1;
        }
    )
    console.log(list);
    return(
        <div id="eventList">
            <div>
                <ul>
                    {
                        list.map(
                            (item) => (
                                <Link to={`./${item.slug}`}>
                                    <dl>
                                        <dt>{item.title}</dt>
                                        <dd>{item.start}</dd>
                                    </dl>
                                </Link>
                            )
                        )
                    }
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}