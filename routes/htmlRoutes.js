const htmlRouter = require('express').Router();
const path = require('path');




// Wildcard route to direct users to the index
htmlRouter.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

//get route for notes page
htmlRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


module.exports = htmlRouter;