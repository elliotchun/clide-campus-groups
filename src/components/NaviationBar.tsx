import { NavLink } from "react-router";

const NavigationBar = () => {
    return (
        <div className="fixed bottom-0 w-full flex items-end justify-center mb-12">
            <nav className="bg-blue-600 rounded-3xl w-65 h-12">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/tab2" end>New Event</NavLink>
                <NavLink to="/tab3" end>Favorites</NavLink>
            </nav>
        </div>
    );
};

export default NavigationBar;