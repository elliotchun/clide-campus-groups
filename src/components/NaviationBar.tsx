import { NavLink } from "react-router";

const NavigationBar = () => {
    return (
        <div className="fixed inset-0 flex items-end justify-center">
            <nav className="bg-blue-800 rounded-3xl w-65 h-12 mb-12">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/tab2" end>New Event</NavLink>
                <NavLink to="/tab3" end>Favorites</NavLink>
                
            </nav>
        </div>
    );
};

export default NavigationBar;