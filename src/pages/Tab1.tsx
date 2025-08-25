import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { Category } from '../services/EventCategory';
import NavigationBar from '../components/NavigationBar';
import Events from '../services/EventService';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { FunnelIcon } from '@heroicons/react/24/outline';
import ModalDialog from '../components/ModelDialog';
import { useState } from 'react';

const Tab1: React.FC = () => {
    const [isFilterModalActive, setFilterModalState] = useState<boolean>(false);

    const showFilterModal = () => {
        setFilterModalState(true);
    };

    const hideFilterModal = () => {
        setFilterModalState(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 px-2 py-4 h-32 flex items-center justify-between">
                <h1 className="ml-6 pt-12 text-2xl font-bold w-fit">Welcome CLIDE USER!</h1>
                <img className="mr-6 w-16 h-18 self-end" src="Petr.png"></img>
            </header>
            <main className="bg-gray-100 flex-1">
                <div className="search-bar bg-white m-6 text-black py-2 px-4 rounded-lg border-2 border-gray-300 shadow-md">
                    <button id="btn-search-filter">
                        <MagnifyingGlassIcon className="size-5 text-gray-400"></MagnifyingGlassIcon>
                    </button>
                    <input className="flex-2 mx-2" type="text" placeholder="Search events..." />
                    <button id="btn-search-filter" className="cursor-pointer hover:bg-gray-100 rounded-full p-1" onClick={showFilterModal}>
                        <FunnelIcon className="size-6 text-gray-400 flex-"></FunnelIcon>
                    </button>
                </div>
                <h1 className="ml-6 text-black text-xl font-bold">Explore New Clubs</h1>
                <ClubCarousel></ClubCarousel>
                <h1 className="ml-6 my-4 text-black text-xl font-bold">Upcoming Events</h1>
                <div>
                    <div className="club-list m-4" role="feed">
                        {Events.map((item, index) => (
                            <EventThumbnail event={item}></EventThumbnail>
                        ))}
                    </div>
                </div>
            </main>
            <NavigationBar></NavigationBar>
            {isFilterModalActive && (
                <ModalDialog>
                    <div className="text-black">
                        <header>
                            <h2 className="text-lg ml-3">Filter Events</h2>
                        </header>
                        <main className="m-3">
                            <label htmlFor="eventDate" className="block text-sm font-medium mb-1">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                value=''
                                onChange={() => {}}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <h3 className="my-1 text-sm font-medium">Category</h3>
                            {Object.values(Category).filter(key => !(Number(key) >= 0)).map((key) => (
                                <div key={key} className="flex flex-row my-2">
                                    <input className="size-5"
                                        type="checkbox"
                                        id={`category-${key}`}
                                    />
                                    <label className="text-sm ml-2" htmlFor={`category-${key}`}>{key}</label>
                                </div>
                            ))}
                        </main>
                        <footer className="flex justify-end space-x-2 mt-4">
                            <button onClick={hideFilterModal} className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer">Cancel</button>
                            <button onClick={hideFilterModal} className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">Submit</button>
                        </footer>
                    </div>
                </ModalDialog>
            )}
        </div>
    );
};

export default Tab1;

