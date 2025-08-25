import './Tab2.css';
import { FormEvent, FormEventHandler, useState } from 'react';
import { ACMClub } from '../services/ClubService';
import Events, { type Event as EEvent } from '../services/EventService';
import { Category } from '../services/EventCategory';
import NavigationBar from '../components/NavigationBar';

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
        <div className="min-h-screen bg-gray-50">
            <header className="text-center text-black">
                <h1 className="text-2xl font-bold py-12">New Event</h1>
            </header>
            <main className="text-black max-w-md mx-auto p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">
                            Event Name
                        </label>
                        <input
                            type="text"
                            id="eventName"
                            name="eventName"
                            placeholder="Name"
                            value={eventData.name}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
                            Event Description
                        </label>
                        <textarea
                            id="eventDescription"
                            name="eventDescription"
                            placeholder="Description"
                            value={eventData.description}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitting}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="eventDateTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Event Date & Time
                        </label>
                        <input
                            type="datetime-local"
                            id="eventDateTime"
                            name="eventDateTime"
                            value={eventData.eventDateTime ? eventData.eventDateTime.toISOString().slice(0, 16) : ''}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Event Location
                        </label>
                        <input
                            type="text"
                            id="eventLocation"
                            name="eventLocation"
                            placeholder="Location"
                            value={eventData.location}
                            onChange={(e) => handleChange(e)}
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </main>
            
            {showToast && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                    Event submitted successfully!
                </div>
            )}

            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Tab2;

