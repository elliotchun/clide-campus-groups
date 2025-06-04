import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonModal, IonPage, IonTextarea, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { FormEvent, FormEventHandler, useState } from 'react';
import { ACMClub } from '../services/ClubService';
import Events, { type Event as EEvent } from '../services/EventService';
import { Category } from '../services/EventCategory';

const Tab2 = () => {
    const [eventData, setEventData] = useState({
        name: '',
        description: '',
        location: '',
        eventDateTime: new Date(),
        hostClub: ACMClub,
        category: Category.Social
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as unknown as { name: string, value: string };
        if (name === 'eventDateTime') {
            const date = new Date(value);
            setEventData(prevData => ({
                ...prevData,
                eventDateTime: date
            }));
        }
        else if (name === "eventName") {
            setEventData(prevData => ({
                ...prevData,
                name: value
            }));
        }
        else if (name === "eventDescription") {
            setEventData(prevData => ({
                ...prevData,
                description: value
            }))
        }
        else if (name === "eventLocation") {
            setEventData(prevData => ({
                ...prevData,
                location: value
            }))
        }
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        Events.push(eventData as EEvent);
        setShowToast(true); // Show confirmation message
        setTimeout(() => {
            window.location.href = "/tab1";
        }, 2000); // Adjust the delay as needed
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>New Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <form onSubmit={handleSubmit}>
                    <IonInput
                        mode="md"
                        type="text"
                        name="eventName"
                        label="Event name"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Name"
                        value={eventData.name}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitting}
                    />
                    <br />
                    <IonTextarea
                        mode="md"
                        name="eventDescription"
                        label="Event Description"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Description"
                        value={eventData.description}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitting}
                    />
                    <br />
                    <IonInput
                        mode="md"
                        type="text"
                        name="eventLocation"
                        label="Event Location"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Location"
                        value={eventData.location}
                        onChange={(e) => handleChange(e)}
                        disabled={isSubmitting}
                    />
                    <br />
                    <IonDatetimeButton
                        datetime="datetime"
                        disabled={isSubmitting}
                    />
                    <br />
                    <IonButton type="submit" expand="full" disabled={isSubmitting}>
                        Submit
                    </IonButton>
                </form>
            </IonContent>
            <IonModal keepContentsMounted={true}>
                <IonDatetime name="eventDateTime" id="datetime" value={eventData.eventDateTime.toISOString()} onChange={(e) => handleChange(e)}></IonDatetime>
            </IonModal>
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Event submitted successfully!"
                duration={2000}
            />
        </IonPage>
    );
};
export default Tab2;
