import { Category } from "./ClubCategory";

export interface Club {
    name: string,
    description: string,
    category: Category
};

export const TennisClub = {
    name: "Tennis Club",
    description: "",
    category: Category.Athletic
}

export const TabletopClub = {
    name: "Tabletop Club",
    description: "",
    category: Category.Social
}

const Clubs: Club[] = [
    {
        name: "Women's Gaming Club",
        description: "",
        category: Category.Social
    },
    TennisClub,
    TabletopClub
];

export default Clubs;
