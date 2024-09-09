const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const games = [
    {
        id: 1,
        title: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Action-adventure',
        platform: 'Nintendo Switch',
        releaseYear: 2017,
    },
    {
        id: 2,
        title: 'God of War',
        genre: 'Action-adventure',
        platform: 'PlayStation 4',
        releaseYear: 2018,
    },
    {
        id: 3,
        title: 'Cyberpunk 2077',
        genre: 'Role-playing',
        platform: 'PC',
        releaseYear: 2020,
    },
    {
        id: 4,
        title: 'Hollow Knight',
        genre: 'Metroidvania',
        platform: 'PC',
        releaseYear: 2017,
    },
    {
        id: 5,
        title: 'Minecraft',
        genre: 'Sandbox',
        platform: 'Multi-platform',
        releaseYear: 2011,
    },
];

// Exercise 2: Get all games
app.get("/games", (req, res) => {
    res.json({ games });
});

// Exercise 3: Get game by ID
app.get("/games/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const result = games.find(game => game.id === id);
    if (result) {
        res.json({ game: result });
    } else {
        res.json({ message: "Game not found." });
    }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});