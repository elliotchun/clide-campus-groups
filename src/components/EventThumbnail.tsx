import { IonIcon } from '@ionic/react';
import './EventThumbnail.css';
import { starOutline } from 'ionicons/icons';

interface EventThumbnailProps {
    name: string
    description: string
}

const EventThumbnail: React.FC<EventThumbnailProps> = ({ name, description }) => {
    return (
        <div className="event-thumbnail">
            <img src="Drippy.png" />
            <div>
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <IonIcon icon={starOutline} className="event-favorite"></IonIcon>
        </div>
    );
};

export default EventThumbnail;
