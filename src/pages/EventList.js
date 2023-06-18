import { Link } from 'react-router-dom';
import data from '../api/event.json';
import { useState } from 'react';
import '../scss/eventList.scss';

export default function EventList(){
    const [sortBy, setSortBy] = useState('slug');
    // const [sortBy, setSortBy] = useState(data);

    const list = data.sort(
        (a, b)=>{
            return a[sortBy]>b[sortBy]? -1 : 1;
        }
    )
    return(
        <div id="eventList">
            <div>
                <ul>
                    {
                        data.map(
                            (item) => (
                                <li key={item.evId}>
                                    <Link to={`/event/${item.slug}`}>
                                        <dl>
                                            <dt>{item.title}</dt>
                                            <dd>{item.start}</dd>
                                        </dl>
                                    </Link>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        </div>
    );
}