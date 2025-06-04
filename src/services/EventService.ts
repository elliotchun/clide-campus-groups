import { Category } from "./EventCategory";
import { ACMClub, AIClub, ArtsCollective, AstronomyClub, BasketballClub, BoardGamesClub, ClimbingClub, CookingClub, EnvironmentalClub, FilmSociety, GardeningClub, HikingClub, HousingCouncil, ImprovClub, InternationalClub, LiteratureSociety, MathClub, OutdoorAdventureClub, PaintingClub, PhotoClub, PreMedSociety, RunningClub, SocialClub, StudentLifeOffice, StudentUnion, TabletopClub, TennisClub, TriviaClub, YogaClub, type Club } from "./ClubService"

export interface Event {
    name: string,
    description: string,
    location: string,
    eventDateTime: Date,
    hostClub: Club,
    category: Category,
    isFavorite?: boolean
};

export const Events: Event[] = [
    {
        name: "Math Club Problem Solving Night",
        description: "Tackle challenging math problems in a group setting every Wednesday.",
        location: "Rowland Hall 206",
        eventDateTime: new Date(2025, 4, 7, 18, 0),
        category: Category.Academic,
        hostClub: MathClub
    },
    {
        name: "Pre-Med Study Session",
        description: "Prepare for exams with fellow pre-med students.",
        location: "Bio Sci III Lobby",
        eventDateTime: new Date(2025, 4, 9, 17, 0),
        category: Category.Academic,
        hostClub: PreMedSociety
    },
    {
        name: "Guest Lecture: AI in Society",
        description: "Join us for a guest lecture on artificial intelligence and its societal impacts",
        location: "Donald Bren Hall 6011",
        eventDateTime: new Date(2025, 4, 15, 19, 0),
        category: Category.Academic,
        hostClub: AIClub
    },
    {
        name: "Coding Interview Prep Workshop",
        description: "Practice technical interview problems with Computer Science Club members.",
        location: "ICS 192",
        eventDateTime: new Date(2025, 4, 16, 17, 30),
        category: Category.Academic,
        hostClub: ACMClub
    },
    {
        name: "Weekly Book Discussion: Modern Fiction",
        description: "Participate in our book discussion on selected fiction works every Friday.",
        location: "Langson Library 1st Floor",
        eventDateTime: new Date(2025, 4, 12, 14, 0),
        category: Category.Academic,
        hostClub: LiteratureSociety
    },
    {
        name: "Boba and Board Games",
        description: "Enjoy free boba drinks and board games.",
        location: "Student Center, Pacific Ballroom",
        eventDateTime: new Date(2025, 4, 10, 18, 0),
        category: Category["Food and Drinks"],
        hostClub: TabletopClub
    },
    {
        name: "Weekly International Food Fair",
        description: "Sample food from around the world every Thursday.",
        location: "Aldrich Park",
        eventDateTime: new Date(2025, 4, 11, 12, 0),
        category: Category["Food and Drinks"],
        hostClub: InternationalClub
    },
    {
        name: "Cooking Workshop: Sushi Making",
        description: "Learn how to make sushi from scratch.",
        location: "Anteater Recreation Center Kitchen",
        eventDateTime: new Date(2025, 4, 13, 16, 0),
        category: Category["Food and Drinks"],
        hostClub: CookingClub
    },
    {
        name: "Coffee & Conversations",
        description: "Grab a free coffee and connect with peers.",
        location: "Gateway Study Center",
        eventDateTime: new Date(2025, 4, 14, 10, 0),
        category: Category["Food and Drinks"],
        hostClub: StudentUnion
    },
    {
        name: "Potluck Picnic",
        description: "Bring a dish to share and enjoy a casual outdoor meal.",
        location: "Mason Park",
        eventDateTime: new Date(2025, 4, 20, 13, 0),
        category: Category["Food and Drinks"],
        hostClub: SocialClub
    },
    {
        name: "Tennis Tournament",
        description: "Join the UCI Tennis Club for our weekend tournament!",
        location: "ARC Tennis Courts",
        eventDateTime: new Date(2025, 5, 10, 16, 0, 0, 0),
        category: Category.Athletic,
        hostClub: TennisClub
    },
    {
        name: "Weekly 5K Fun Run",
        description: "Meet up for a friendly 5K run around campus every Monday.",
        location: "Aldrich Park",
        eventDateTime: new Date(2025, 5, 12, 8, 0),
        category: Category.Athletic,
        hostClub: RunningClub
    },
    {
        name: "Basketball Pick-Up Games",
        description: "Casual basketball games open to all students.",
        location: "ARC Basketball Courts",
        eventDateTime: new Date(2025, 5, 14, 18, 30),
        category: Category.Athletic,
        hostClub: BasketballClub
    },
    {
        name: "Yoga in the Park",
        description: "Relax and unwind with a free outdoor yoga session.",
        location: "ARC Training Room",
        eventDateTime: new Date(2025, 5, 16, 7, 30),
        category: Category.Athletic,
        hostClub: YogaClub
    },
    {
        name: "Beginner's Rock Climbing Night",
        description: "Try out rock climbing with instruction for all skill levels.",
        location: "ARC Climbing Wall",
        eventDateTime: new Date(2025, 5, 17, 19, 0),
        category: Category.Athletic,
        hostClub: ClimbingClub
    },
    {
        name: "Open Mic Night",
        description: "Share your poems, music, or comedy at our monthly open mic.",
        location: "ALP 1100",
        eventDateTime: new Date(2025, 6, 1, 19, 0),
        category: Category["Creative Arts"],
        hostClub: ArtsCollective
    },
    {
        name: "Watercolor Painting Workshop",
        description: "Learn watercolor painting techniques, materials provided.",
        location: "Claire Trevor School of the Arts, Room 122",
        eventDateTime: new Date(2025, 6, 3, 17, 30),
        category: Category["Creative Arts"],
        hostClub: PaintingClub
    },
    {
        name: "Photography Walk",
        description: "Bring your camera for an inspiring campus photography walk.",
        location: "Science Library",
        eventDateTime: new Date(2025, 6, 8, 16, 0),
        category: Category["Creative Arts"],
        hostClub: PhotoClub
    },
    {
        name: "Film Screening: Student Shorts",
        description: "Watch and discuss short films made by UCI students.",
        location: "Humanities Hall 178",
        eventDateTime: new Date(2025, 6, 9, 18, 0),
        category: Category["Creative Arts"],
        hostClub: FilmSociety
    },
    {
        name: "Weekly Improv Workshop",
        description: "Drop in and learn improv comedy.",
        location: "ALP 1100",
        eventDateTime: new Date(2025, 6, 10, 20, 0),
        category: Category["Creative Arts"],
        hostClub: ImprovClub
    },
    {
        name: "Game Night Social",
        description: "Play classic and new party games with fellow Anteaters.",
        location: "Middle Earth Housing Community Room",
        eventDateTime: new Date(2025, 4, 17, 19, 0),
        category: Category["Creative Arts"],
        hostClub: HousingCouncil
    },
    {
        name: "Speed Friending",
        description: "Meet new people and make friends in a fun, fast-paced setting.",
        location: "Student Center, Ring Room",
        eventDateTime: new Date(2025, 4, 24, 18, 0),
        category: Category.Social,
        hostClub: StudentLifeOffice
    },
    {
        name: "Movie Night: Blockbuster Hits",
        description: "Free screening of recent blockbuster movies for all students.",
        location: "Aldrich Hall Amphitheater",
        eventDateTime: new Date(2025, 4, 27, 20, 15),
        category: Category.Social,
        hostClub: FilmSociety
    },
    {
        name: "Board Game Marathon",
        description: "All-day board game extravaganza. Snacks provided.",
        location: "Crescent Bay Room",
        eventDateTime: new Date(2025, 5, 5, 10, 0),
        category: Category.Social,
        hostClub: BoardGamesClub
    },
    {
        name: "Trivia Night",
        description: "Compete with teams in a battle of wits. Prizes for top scorers!",
        location: "Pub at The Anteater",
        eventDateTime: new Date(2025, 5, 8, 19, 0),
        category: Category.Social,
        hostClub: TriviaClub
    },
    {
        name: "Beach Clean-Up Day",
        description: "Help keep our beaches beautiful. Supplies and transportation included.",
        location: "Newport Beach",
        eventDateTime: new Date(2025, 4, 22, 9, 0),
        category: Category.Nature,
        hostClub: EnvironmentalClub
    },
    {
        name: "Nature Hike at Crystal Cove",
        description: "Enjoy a scenic hike and learn about local flora and fauna.",
        location: "Lot 16H",
        eventDateTime: new Date(2025, 4, 28, 7, 30),
        category: Category.Nature,
        hostClub: HikingClub
    },
    {
        name: "Gardening Day",
        description: "Get your hands dirty planting veggies in the UCI garden.",
        location: "UCI Garden",
        eventDateTime: new Date(2025, 5, 4, 10, 0),
        category: Category.Nature,
        hostClub: GardeningClub
    },
    {
        name: "Stargazing Night",
        description: "Learn about astronomy while stargazing with telescopes.",
        location: "Aldrich Park",
        eventDateTime: new Date(2025, 5, 10, 21, 0),
        category: Category.Nature,
        hostClub: AstronomyClub
    },
    {
        name: "Kayaking Adventure",
        description: "Explore Upper Newport Bay by kayak. All skill levels welcome.",
        location: "Upper Newport Bay Ecological Reserve",
        eventDateTime: new Date(2025, 5, 15, 8, 0),
        category: Category.Nature,
        hostClub: OutdoorAdventureClub
    },
];

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
