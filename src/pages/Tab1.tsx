import './Tab1.css';
import EventThumbnail from '../components/EventThumbnail';
import ClubCarousel from '../components/ClubCarousel';
import { Category } from '../services/EventCategory';
import NavigationBar from '../components/NaviationBar';

const Tab1: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 px-2 py-4">
                <h1 className="ml-6">Welcome CLIDE USER!</h1>
            </header>
            <main className="bg-gray-100 flex-1">
                <div className="search-bar bg-white m-6 text-black py-2 rounded-lg border-2 border-gray-300">
                    <button className="px-2" id="btn-search-filter">
                        Search
                    </button>
                    <input type="text" placeholder="Search events..." />
                    <button id="btn-search-filter">Filter</button>
                </div>
                <h1 className="ml-6 text-black text-xl font-bold">Explore New Clubs</h1>
                <ClubCarousel></ClubCarousel>
                <h1 className="ml-6 text-black text-xl font-bold">Upcoming Events</h1>
                <div>
                    <div className="club-list" role="feed"></div>
                </div>
            </main>
            <NavigationBar></NavigationBar>
            <dialog id="filter-modal" className="bg-white rounded-xl text-black">
                <header>
                    <h2 className="text-lg mt-10 ml-3">Filter Events</h2>
                </header>
                <main className="ml-3">
                    <h3 className="my-1">Category</h3>
                    {Object.values(Category).filter(key => !(Number(key) >= 0)).map((key) => (
                        <div key={key}>
                            <input className="bg-white border-gray-300"
                                type="checkbox"
                                id={`category-${key}`}
                            />
                            <label className="text-sm ml-1" htmlFor={`category-${key}`}>{key}</label>
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

