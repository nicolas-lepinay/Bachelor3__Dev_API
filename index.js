// 📚 Libraries
const express = require('express'); // Express framework
const dotenv = require("dotenv"); // Pour stocker les variables d'environnements

// 🚗 Routes
const securityRoute = require("./routes/security");
const postRoute = require("./routes/posts");

const app = express();
const PORT = 8080;

dotenv.config();
app.use(express.json()); // Body parser for POST requests

app.use("/api/security", securityRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}...`);
});
