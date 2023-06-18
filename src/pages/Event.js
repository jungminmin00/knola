import { useParams } from "react-router";
import eventData from '../api/event.json';

export default function Event(){
    const {slug} = useParams();
    return(
        <div id="event">
            <div>
                <h3>
                    {eventData[slug].title}
                </h3>
                <div>
                    <img src={eventData[slug].photo} alt="photo" />
                </div>
                <p>{eventData[slug].detail}</p>
            </div>
        </div>
    );
}