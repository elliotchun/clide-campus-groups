import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import EventThumbnail from '../components/EventThumbnail';
import './Tab3.css';

const Tab3: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favorites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <EventThumbnail name={"Drippy"} description={"Another fine drip squad product!"}></EventThumbnail>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
