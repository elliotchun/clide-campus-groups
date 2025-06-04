import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonIcon, IonItem } from '@ionic/react';
import './EventThumbnail.css';
import { starOutline } from 'ionicons/icons';
import { eventDateTimeToString, type Event } from '../services/EventService';


const EventThumbnail: React.FC<Event> = (event: Event) => (
    <IonCard className="event-thumbnail" role="article">
        <div className="event-thumbnail-horizontal">
            <IonImg src="Drippy.png" alt={event.name} className="event-thumbnail-image" />
            <div>
                <IonCardHeader>
                    <IonCardTitle>{event.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText color="medium">
                        <p>{event.description}</p>
                        <p>{event.location}</p>
                        <p>{eventDateTimeToString(event.eventDateTime)}</p>
                    </IonText>
                </IonCardContent>
                <IonIcon icon={starOutline} className="event-favorite" />
            </div>
        </div>
    </IonCard>
);

export default EventThumbnail;
