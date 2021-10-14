const express = require('express');
const path = require('path');
//const api = require('./routes/index.js');
const uuid = require('./helpers/uuid');
const PORT = process.env.port || 3001;
const notesData = require('./db/db.json');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

//HTML Routes
// Wildcard route to direct users to the index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//get route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//API Routes

//get route
app.get('/api/notes', (req, res) => {
    // Send a message to the client
    res.json(`${req.method} request received to get reviews`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
  });

//post route
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      // Push new note to file
      notesData.push(newNote);
    
  
     /* // Write the string to a file
      fs.writeFile(`./db/${newReview.product}.json`, reviewString, (err) =>
        err
          ? console.error(err)
          : console.log(
              `Review for ${newReview.product} has been written to JSON file`
            )
      );*/
  
        
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in saving note');
    }
  });


//app listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);