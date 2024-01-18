const seedUser = {
    name: "Edward Spriggs",
    currentColor: "federal-blue"
};

const seedCards = [
    {
        target: "chicken dance",
        blockers: [
            "wedding",
            "accordion",
            "flap",
            "wings",
            "silly"
        ],
        bgColor: "avocado",
        author: undefined // will be set to the ObjectId of the user above, at seed time
    }, {
        target: "triple",
        blockers: [
            "three",
            "base",
            "hit",
            "single",
            "double"
        ],
        bgColor: "pantone-orange",
        author: undefined // as above
    }, {
        target: "oriole",
        blockers: [
            "bird",
            "baltimore",
            "baseball",
            "camden yards",
            "stadium"
        ],
        bgColor: "federal-blue",
        author: undefined // as above
    }, {
        target: "jeep",
        blockers: [
            "car",
            "suv",
            "rugged",
            "army",
            "wrangler"
        ],
        bgColor: "goldenrod",
        author: undefined // as above
    }
];

module.exports = {
    user: seedUser,
    cards: seedCards
};