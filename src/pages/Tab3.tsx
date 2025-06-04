import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EventThumbnail from '../components/EventThumbnail';
import './Tab3.css';
import Events, { type Event } from '../services/EventService';

const Tab3: React.FC = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteEvents') || "[]") as Event[];
    const events = Events.filter(event => storedFavorites.some(e => e.name === event.name)).toSorted((a, b) => a.eventDateTime.getTime() - b.eventDateTime.getTime());

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favorites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList class="club-list" role="feed">
                    {events.map((event, index) => (
                        <IonItem key={index}>
                            <EventThumbnail {...event}></EventThumbnail>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
