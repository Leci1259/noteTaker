const express = require('express');
const path = require("path");
const apiRouter = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//grabbing routes
app.use('/api',apiRouter);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

// Wildcard route to direct users to a 404 page
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

//app listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);