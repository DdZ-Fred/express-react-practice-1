const mongoose = require('mongoose');
import app from 'app.js';

const PORT = process.env.PORT || 8080;
const uriString =
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/express-react-practice-1';

let server;

mongoose.connect(uriString, (err, res) => {
  if (err) {
    console.log('[Mongoose] Connection failed!', err);
    throw new Error('MongoDB connection failed', err);
  } else {
    console.log('[Mongoose] Connection succeeded!');
    server = app.listen(PORT, () => {
      console.log(`Server is now listening on localhost:${PORT}`);
    });
  }
});
