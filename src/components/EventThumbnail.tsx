import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonButton } from '@ionic/react';
import './EventThumbnail.css';
import { starOutline, star, locationOutline, alarmOutline } from 'ionicons/icons';
import { eventDateTimeToString, type Event } from '../services/EventService';
import { useEffect, useState } from 'react';


const EventThumbnail: React.FC<Event> = (event: Event) => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteEvents');
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites) as Event[];
            if (parsedFavorites.some(e => e.name === event.name)) {
                setIsFavorite(true);
            }
        }
    }, [event.name]);

    const addFavorite = () => {
        let currentFavorites = localStorage.getItem('favoriteEvents') ? JSON.parse(localStorage.getItem('favoriteEvents') || '[]') as Event[] : [];

        if (!currentFavorites.some(e => e.name === event.name)) {
            currentFavorites.push(event);
            localStorage.setItem('favoriteEvents', JSON.stringify(currentFavorites));
            setIsFavorite(true);
        } else {
            currentFavorites = currentFavorites.filter(e => e.name !== event.name);
            localStorage.setItem('favoriteEvents', JSON.stringify(currentFavorites));
            setIsFavorite(false);
        }
    };


    const openEvent = () => {
        setSelectedEvent(event);
    };

    const closeEvent = () => {
        setSelectedEvent(null);
    }

    const getStarIconStyle = () => {
        return isFavorite ? star : starOutline;
    }

    return (
        <IonCard className="event-thumbnail" role="article" >
            <div className="event-thumbnail-horizontal">
                <IonImg src="Drippy.png" alt={event.name} className="event-thumbnail-image" onClick={_ => openEvent()} />
                <div onClick={_ => openEvent()}>
                    <IonCardHeader>
                        <IonCardTitle>{event.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText color="medium">
                            <p>{event.description}</p>
                            <p><IonIcon icon={alarmOutline} /> {eventDateTimeToString(event.eventDateTime)}</p>
                            <p><IonIcon icon={locationOutline} /> {event.location}</p>
                        </IonText>
                    </IonCardContent>
                </div>
                <IonIcon icon={getStarIconStyle()} className="event-favorite" onClick={_ => addFavorite()} />
            </div>
            <IonModal isOpen={selectedEvent !== null} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 1]}
                onWillDismiss={_ => closeEvent()}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Event Details</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={_ => closeEvent()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {selectedEvent && (
                        <>
                            <h1>{selectedEvent.name}</h1>
                            <p>{selectedEvent.description}</p>
                            <p><IonIcon icon={alarmOutline} /> {eventDateTimeToString(event.eventDateTime)}</p>
                            <p><IonIcon icon={locationOutline} /> {selectedEvent.location}</p>
                        </>
                    )}
                </IonContent>
            </IonModal>
        </IonCard>
    );

}

export default EventThumbnail;
