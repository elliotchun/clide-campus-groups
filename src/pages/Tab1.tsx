import {
    IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonInfiniteScroll, IonInfiniteScrollContent, IonIcon,
    IonButtons, IonButton
} from '@ionic/react';
import { funnelOutline, searchOutline } from 'ionicons/icons';
import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { useEffect, useState } from "react";
import Events from '../services/EventService';

const PAGE_SIZE = 10;

const allEvents = Events;

const Tab1: React.FC = () => {
    const [events, setEvents] = useState([]);
    const [hasNext, setHasNext] = useState(events.length < allEvents.length)
    const showNextEventsPage = () => {
        setEvents(prevEvents => {
            if (prevEvents.length >= allEvents.length) {
                setHasNext(false);
                return prevEvents;
            }
            const nextEvents = allEvents.slice(
                prevEvents.length,
                prevEvents.length + PAGE_SIZE
            );
            const updatedEvents = [...prevEvents, ...nextEvents];
            setHasNext(updatedEvents.length < allEvents.length);
            return updatedEvents;
        });

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
            </IonHeader>
            <IonContent fullscreen>
                <div className="search-bar">
                    <IonSearchbar searchIcon={searchOutline} animated={true} />
                    <IonButton shape="round" aria-label="Filter">
                        <IonIcon slot="icon-only" icon={funnelOutline} />
                    </IonButton>
                </div>
                <h1>Explore New Clubs</h1>
                <ClubCarousel></ClubCarousel>
                <h1>Upcoming Events</h1>
                <div>
                    <IonList class="club-list" role="feed">
                        {events.map((event, index) => (
                            <EventThumbnail key={index} {...event}></EventThumbnail>
                        ))}
                    </IonList>
                    <IonInfiniteScroll
                        threshold="50px"
                        disabled={!hasNext}
                        onIonInfinite={(event) => {
                            showNextEventsPage();
                            setTimeout(() => event.target.complete(), 500);
                        }}>
                        <IonInfiniteScrollContent loadingText="Loading...">
                        </IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Tab1;
