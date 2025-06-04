import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonModal, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { useState } from 'react';
import { ACMClub } from '../services/ClubService';
import Events from '../services/EventService';

const Tab2 = () => {
    const [eventData, setEventData] = useState({
        name: '',
        description: '',
        location: '',
        eventDateTime: new Date(),
        hostClub: ACMClub,
        category: 'Other'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation passed, proceed to submission logic
        console.log('Form submitted:', eventData); // Replace with actual submission logic
        Events.push(eventData);
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
                    />
                    <br />
                    <IonDatetimeButton
                        datetime="datetime"
                    />
                    <br />
                    <IonButton type="submit" expand="full">
                        Submit
                    </IonButton>
                </form>
            </IonContent>
            <IonModal keepContentsMounted={true}>
                <IonDatetime name="eventDateTime" id="datetime" value={eventData.eventDateTime.toISOString()} onChange={(e) => handleChange(e)}></IonDatetime>
            </IonModal>
        </IonPage>
    );
};
export default Tab2;
