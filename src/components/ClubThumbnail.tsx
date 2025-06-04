import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonImg, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import './ClubThumbnail.css';
import { Club } from '../services/ClubService';
import { useState } from 'react';

const ClubThumbnail: React.FC<Club> = (club) => {
    const [selectedClub, setSelectedClub] = useState<any>(null);
    const openClub = () => {
        setSelectedClub(club);
    };

    const closeClub = () => {
        setSelectedClub(null);
    }
    return (
        <>
            <IonCard className="club-thumbnail" onClick={_ => openClub()}>
                <IonImg className="club-thumbnail-img" src="Drippy.png" alt={club.name} />
                <p className="club-thumbnail-name">{club.name}</p>
            </IonCard>
            <IonModal isOpen={selectedClub !== null} initialBreakpoint={0.25} breakpoints={[0, 0.25, 1]}
                onWillDismiss={_ => closeClub()}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Club Details</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={_ => closeClub()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {selectedClub && (
                        <>
                            <h1>{selectedClub.name}</h1>
                            <p>{selectedClub.description}</p>
                        </>
                    )}
                </IonContent>
            </IonModal>
        </>
    );
}

export default ClubThumbnail;
