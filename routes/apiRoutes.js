const fs = require('fs');
const uuid = require('./helpers/uuid')

//get route
app.get('/api/notes', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received to get notes`);

    // Read notes
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    //send notes back
    res.json(data);
});


//post route
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const newNote = req.body;

    //assign an id
    newNote.id = uuid()

    // Read notes 
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // Push new note to file
    data.push(newNote);


    fs.writeFileSync('./db/db.json', JSON.stringify(data))


    console.log("successful post!");

});
