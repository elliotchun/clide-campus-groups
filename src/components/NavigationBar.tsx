import { NavLink } from "react-router";
import { HomeIcon, PlusCircleIcon, StarIcon } from "@heroicons/react/24/solid";

const NavigationBar = () => {
    return (
        <div className="fixed bottom-0 w-full flex items-end justify-center mb-12">
            <nav className="bg-blue-600 rounded-3xl w-65 h-12 text-white grid grid-cols-3 justify-items-center items-center">
                <NavLink to="/tab1" className={({ isActive }) => 
                    isActive ? "text-yellow-400" : ""
                } end>
                    <HomeIcon className="size-8"></HomeIcon>
                </NavLink>
                <NavLink to="/tab2" className={({ isActive }) => 
                    isActive ? "text-yellow-400" : ""
                } end>
                    <PlusCircleIcon className="size-10"></PlusCircleIcon>
                </NavLink>
                <NavLink to="/tab3" className={({ isActive }) => 
                    isActive ? "text-yellow-400" : ""
                } end>
                    <StarIcon className="size-8"></StarIcon>
                </NavLink>
            </nav>
        </div>
    );
};

export default NavigationBar;