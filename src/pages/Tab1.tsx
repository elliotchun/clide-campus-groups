import {
    IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonInfiniteScroll, IonInfiniteScrollContent, IonIcon, IonButton, IonItem,
    IonModal, IonButtons, IonCheckbox
} from '@ionic/react';
import { funnelOutline, searchOutline } from 'ionicons/icons';
import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { useEffect, useRef, useState } from "react";
import Events, { type Event } from '../services/EventService';
import { Category } from '../services/EventCategory';
import { ACMClub } from '../services/ClubService';

const PAGE_SIZE = 10;

const allEvents = Events.toSorted((a, b) => a.eventDateTime.getTime() - b.eventDateTime.getTime());

const Tab1: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);

    const [events, setEvents] = useState<Event[]>([]);
    const [hasNext, setHasNext] = useState(events.length < allEvents.length)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
            const updatedEvents: Event[] = [...prevEvents, ...nextEvents];
            setHasNext(updatedEvents.length < allEvents.length);
            return updatedEvents;
        });

    }

    const resetForm = () => {
        setSelectedCategories([]); // Reset selected categories
    };

    const closeModal = () => {
        modal.current?.dismiss(selectedCategories, 'submit');
    }
    const searchEvents = (e: { detail: { value: string } }) => {
        const searchString = e.detail.value;
        if (!searchString) {
            setEvents([]);
            setHasNext(events.length < allEvents.length);
        }
        else {
            const searchResults = [...allEvents, {
                name: "Magic Club Meeting",
                description: "Meet friends and have fun!",
                location: "West Food Court",
                eventDateTime: new Date(),
                hostClub: ACMClub,
                category: Category.Social
            }]
                .filter(event => event.name.startsWith(searchString))
                .toSorted((a, b) => a.eventDateTime.getTime() - b.eventDateTime.getTime());
            setEvents(searchResults)
            setHasNext(false);
        }
    }

    const submitForm = () => {
        const searchResults = allEvents.filter(event => selectedCategories.includes(Category[event.category])).toSorted((a, b) => a.eventDateTime.getTime() - b.eventDateTime.getTime());
        setEvents(searchResults)
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
            </IonHeader>
            <IonContent fullscreen>
                <div className="search-bar">
                    <IonSearchbar searchIcon={searchOutline} animated={true} debounce={300} onIonInput={(e) => searchEvents(e as { detail: { value: string } })} />
                    <IonButton id="search-filter" shape="round" aria-label="Filter">
                        <IonIcon slot="icon-only" icon={funnelOutline} />
                    </IonButton>
                </div>
                <h1>Explore New Clubs</h1>
                <ClubCarousel></ClubCarousel>
                <h1>Upcoming Events</h1>
                <div>
                    <IonList class="club-list" role="feed">
                        {events.map((event, index) => (
                            <IonItem key={index}>
                                <EventThumbnail {...event}></EventThumbnail>
                            </IonItem>
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
            <IonModal ref={modal} trigger="search-filter" className="ion-padding">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Filter Events</IonTitle>
                        <IonButtons slot="start">
                            <IonButton onClick={_ => { closeModal(); }}>Cancel</IonButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={_ => { submitForm(); resetForm(); closeModal() }}>Submit</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent class="ion-padding">
                    {Object.values(Category).filter(key => !(Number(key) >= 0)).map((key) => (
                        <IonItem key={key}>
                            <IonCheckbox
                                slot="start"
                                checked={selectedCategories.includes(key as string)}
                                onIonChange={(e) => {
                                    const newCategories = e.detail.checked
                                        ? [...selectedCategories, key]
                                        : selectedCategories.filter(category => category !== key);
                                    setSelectedCategories(newCategories as string[]);
                                }}
                                labelPlacement="end">{key}</IonCheckbox>
                        </IonItem>
                    ))}
                </IonContent>
            </IonModal>

        </IonPage>
    );
};

export default Tab1;
