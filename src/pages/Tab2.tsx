import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>New Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            </IonContent>
        </IonPage>
    );
};

export default Tab2;
