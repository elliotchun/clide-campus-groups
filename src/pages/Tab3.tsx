import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EventThumbnail from '../components/EventThumbnail';
import './Tab3.css';
import Events from '../services/EventService';

const Tab3: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favorites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <EventThumbnail {...Events[0]}></EventThumbnail>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
