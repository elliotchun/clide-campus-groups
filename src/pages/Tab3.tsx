import EventThumbnail from '../components/EventThumbnail';
import './Tab3.css';
import Events, { type Event } from '../services/EventService';
import NavigationBar from '../components/NavigationBar';

const Tab3: React.FC = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteEvents') || "[]") as Event[];
    const events = Events.filter(event => storedFavorites.some(e => e.name === event.name)).toSorted((a, b) => a.eventDateTime.getTime() - b.eventDateTime.getTime());

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-black">
            <header className="bg-none px-2 py-4 font-bold">
                <h1 className="ml-4 pt-8 text-3xl">Favorites</h1>
            </header>
            <main className="flex-1">
                <div className="m-8" role="feed">
                    {events.map((item, index) => (
                        <EventThumbnail key={index} event={item}></EventThumbnail>
                    ))}
                </div>
            </main>
            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Tab3;
