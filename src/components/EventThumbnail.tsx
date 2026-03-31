import './EventThumbnail.css';
import { eventDateTimeToString, type Event } from '../services/EventService';
import { useEffect, useState } from 'react';
import { ClockIcon, MapPinIcon, StarIcon as SolidStarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';
import ModalDialog from '../components/ModelDialog'

const EventThumbnail: React.FC<{ event: Event }> = ({ event }) => {
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
    };

    const getStarIconStyle = () => {
        return isFavorite ? (
            <SolidStarIcon className="size-6 text-yellow-400"></SolidStarIcon>
        ) : (
            <OutlineStarIcon className="size-6 text-gray-400"></OutlineStarIcon>
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden my-2 border border-gray-200 lg:w-5xl">
            <div className="flex flex-row">
                <div className="w-1/3 flex items-center justify-center">
                    <img src={event.image} alt={event.name} className="size-full object-cover cursor-pointer" onClick={openEvent} />
                </div>
                <div className="w-2/3 p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold text-gray-900 cursor-pointer" onClick={openEvent}>{event.name}</h2>
                        <button onClick={addFavorite} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                            {getStarIconStyle()}
                        </button>
                    </div>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                        <ClockIcon className="size-4 mr-1"></ClockIcon>
                        <span>{eventDateTimeToString(event.eventDateTime)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="size-4 mr-1"></MapPinIcon>
                        <span>{event.location}</span>
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <ModalDialog>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">{selectedEvent.name}</h1>
                        <button onClick={closeEvent} className="text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100">
                            <XMarkIcon className="size-6"></XMarkIcon>
                        </button>
                    </div>
                    <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <ClockIcon className="size-4 mr-1"></ClockIcon>
                        <span>{eventDateTimeToString(event.eventDateTime)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="size-4 mr-1"></MapPinIcon>
                        <span>{selectedEvent.location}</span>
                    </div>
                </ModalDialog>
            )}
        </div>
    );
};

export default EventThumbnail;