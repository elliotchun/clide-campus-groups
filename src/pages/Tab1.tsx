import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { Category } from '../services/EventCategory';

const Tab1: React.FC = () => {
    return (
        <div className="flex flex-col justify-center">
            <header className="bg-blue-500 px-2 py-4">
                <h1 className="block">Welcome CLIDE USER!</h1>
            </header>
            <main className="bg-gray-100 flex flex-col justify-center">
                <div className="search-bar bg-white mt-6 mx-6 text-black py-2 rounded-lg border-2 border-gray-300">
                    <button className="px-2" id="btn-search-filter">
                        Search
                    </button>
                    <input
                        type="text"
                        placeholder="Search events..."
                    />
                    <button id="btn-search-filter">
                        Filter
                    </button>
                </div>
                <h1>Explore New Clubs</h1>
                <h1>Upcoming Events</h1>
                <div>
                    <div className="club-list" role="feed"></div>
                    <button>Load More</button>
                </div>
            </main>
            <dialog id="filter-modal">
                <header>
                    <h2>Filter Events</h2>
                    <button>Close</button>
                </header>
                <main>
                    {Object.values(Category).filter(key => !(Number(key) >= 0)).map((key) => (
                        <div key={key}>
                            <input
                                type="checkbox"
                                id={`category-${key}`}
                            />
                            <label htmlFor={`category-${key}`}>{key}</label>
                        </div>
                    ))}
                </main>
                <footer>
                    <button>Cancel</button>
                    <button>Submit</button>
                </footer>
            </dialog>
        </div>
    );
};

export default Tab1;

