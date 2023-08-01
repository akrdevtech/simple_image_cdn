import mongoose from 'mongoose';
import app from './app';

const port = 3000;

// Set up MongoDB connection
const dbURI = 'mongodb://localhost:27017/image_cdn';

// Set up MongoDB connection
mongoose.connect(dbURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start the server
app.listen(port, () => {
  console.log(`Image CDN server listening at http://localhost:${port}`);
});
