const { Hmac } = require('crypto');
const path = require('path');


const htmlRoutes = function () {
// Wildcard route to direct users to the index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//get route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
}

module.exports = htmlRoutes;