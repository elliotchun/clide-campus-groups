import { Club } from "./ClubService";
import { Category } from "./EventCategory";

export interface Event {
    name: string,
    description: string,
    location: string,
    eventDateTime: Date,
    hostClub: Club,
    category: Category,
    image: string
};

const TennisClub: Club = {
    name: "UCI Tennis Club",
    description: "For students interested in tennis at all levels.",
    image: "Drippy.png"
};

const ArtClub: Club = {
    name: "Art Club",
    description: "Unleash your creative energy at art club.",
    image: "Drippy.png"
};

const BookClub = {
    name: "Book Club",
    description: "UCI Book Club is for members to discuss and discover thought-provoking novels and new favorite authors.",
    image: "ClubIcon_BC.png"
};


export const Events: Event[] = [
    {
        name: "Tennis Tournament",
        description: "Join the UCI Tennis Club for our weekend tournament!",
        location: "ARC Tennis Courts",
        eventDateTime: new Date(2025, 5, 10, 16, 0, 0, 0),
        category: Category.Athletic,
        hostClub: TennisClub,
        image: "EventPoster_T.png"
    },
    {
        name: "Painting Day",
        description: "Bring your easels and brushes for a night of painting.",
        location: "Aldrich Park",
        eventDateTime: new Date(2025, 6, 3, 17, 30),
        category: Category["Creative Arts"],
        hostClub: ArtClub,
        image: "EventPoster_A.png"
    },
    {
        name: "The Midnight Library Book Discussion",
        description: "Join the UCI Book Club as we discuss this week's chapter of The Midnight Library!",
        location: "Rowland Hall 190",
        eventDateTime: new Date(2025, 5, 15, 17, 0, 0),
        category: Category.Social,
        hostClub: BookClub,
        image: "EventPoster_B.png"
    },
];

export const FavoriteEvents = [];

// Use Intl.DateTimeFormat for locale-aware formatting
export const eventDateTimeToString = (date: Date) => date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});

export default Events;
