const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Initialize middleware
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
      origin: 'http://localhost:3000'
    })
);

// Routes
app.use('/api/users', require('./routes/api/users'));

app.use('/api/event', require('./routes/api/event'));
app.use('/api/jobscrap', require('./routes/api/jobScrap'));
app.use('/api/emploi', require('./routes/api/emploi'));
app.use('/api/notification', require('./routes/api/notification'));
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
