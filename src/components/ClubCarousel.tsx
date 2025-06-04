import ClubThumbnail from "./ClubThumbnail";
import Clubs from "../services/ClubService";
import "./ClubCarousel.css"

export const ClubCarousel = () => (
    <div className="club-carousel">
        {Clubs.map(item => (
            <ClubThumbnail {...item} />
        ))}
    </div>
)

export default ClubCarousel;
