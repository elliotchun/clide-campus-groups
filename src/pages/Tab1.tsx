import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './Tab1.css';
import ClubThumbnail from '../components/ClubThumbnail';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome!</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar searchIcon={searchOutline} animated={true}></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Explore New Clubs</h1>
                <ClubThumbnail name={"Drippy"}></ClubThumbnail>
                <h1>Upcoming Events</h1>
                <h2>Athletic</h2>
            </IonContent>
        </IonPage >
    );
};

export default Tab1;
