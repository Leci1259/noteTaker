const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//grabbing routes
app.use('./routes/apiRoutes',apiRoutes);
app.use('./routes/htmlRoutes',htmlRoutes);


//app listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);