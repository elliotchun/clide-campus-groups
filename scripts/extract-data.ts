// Script used to extract club data from CampusGroups


// export interface Club {
//     name: string,
//     description: string,
//     image: string
// };

Array.from(Array.from(document.getElementsByClassName("list-group")).at(-1).children).slice(1, -1).map(e => {

    return {
        name: e.querySelector("h2").innerText,
        description: e.querySelector(".noOutlineOnFocus")
            .innerText
            .replace("\t", " ") // Replace unnecessary characters with whitespace
            .replace("\r", " ")
            .replace("\n", " ")
            .trim()
            .slice(8) // Slice "Mission"
            .replace("\t", " ") // Replace unnecessary characters with whitespace
            .replace("\r", " ")
            .replace("\n", " ")
            .trim(), // Remove trailing and leading whitespace
        image: e.querySelector("img").src,
    }
});