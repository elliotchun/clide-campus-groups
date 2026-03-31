import data from "../club-data.json"

export interface Club {
    name: string,
    description: string,
    image: string
};

const Clubs: Club[] = data;

export default Clubs;
