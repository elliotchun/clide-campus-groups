import ClubThumbnail from "./ClubThumbnail";
import Clubs from "../services/ClubService";
import "./ClubCarousel.css"

export const ClubCarousel = () => (
    <div className="club-carousel snap-x snap-mandatory scroll-p-8">
        {Clubs.map((item, index) => (
            <ClubThumbnail key={index} club={item} />
        ))}
    </div>
)

export default ClubCarousel;
