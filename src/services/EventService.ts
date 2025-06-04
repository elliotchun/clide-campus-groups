import { TennisClub, type Club } from "./ClubService"

export interface Event {
    name: string,
    description: string,
    location: string,
    eventDateTime: Date,
    hostClub: Club,
    isFavorite?: boolean
};

const Events: Event[] = [
    {
        name: "Tennis Tournament",
        description: "Join the UCI Tennis Club for our weekend tournament!",
        location: "ARC Tennis Courts",
        eventDateTime: new Date(2025, 5, 10, 16, 0, 0, 0),
        hostClub: TennisClub
    }
];

export default Events;
