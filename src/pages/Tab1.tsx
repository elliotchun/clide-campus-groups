import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { useEffect, useState } from "react";
import Events from '../services/EventService';

const PAGE_SIZE = 10;

const allEvents = Events;

const Tab1: React.FC = () => {
    const [events, setEvents] = useState(allEvents.slice(-1));
    const [hasNext, setHasNext] = useState(events.length < allEvents.length)
    const showNextEventsPage = () => {
        const nextEvents = allEvents.slice(events.length, events.length + PAGE_SIZE);
        setEvents(prev => [...prev, ...nextEvents]);
        if (events.length + nextEvents.length > + allEvents.length)
            setHasNext(false);
    }

    useEffect(() => {
        showNextEventsPage();
    }, []);

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
                <ClubCarousel></ClubCarousel>
                <h1>Upcoming Events</h1>
                <IonList>
                    {events.map(event => (
                        <EventThumbnail {...event}></EventThumbnail>
                    ))}
                </IonList>
                <IonInfiniteScroll
                    disabled={!hasNext}
                    onIonInfinite={(event) => {
                        showNextEventsPage();
                        setTimeout(() => event.target.complete(), 500);
                    }}>
                    <IonInfiniteScrollContent loadingText="Loading...">
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage >
    );
};

export default Tab1;
