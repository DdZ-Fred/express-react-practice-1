const mongoose = require('mongoose');

/**
 * Connects to DB using Mongoose and if successful, starts the Express server
 * @param  {String} MONGODB_URL [URL to MongoDB server]
 * @param  {Number} PORT        [Express server port number]
 * @param  {Object} app         [Express app instance]
 * @return {Object}             [Express server]
 */
export default function startServer(MONGODB_URL, PORT, app) {
  let server;
  mongoose.connect(MONGODB_URL, (err, res) => {
    if (err) {
      console.log('[MONGOOSE] Connection to DB failed!', err);
      throw new Error('Mongoose connection to DB failed!', err);
    } else {
      console.log('[MONGOOSE] Connection to DB succeeded!');
      server = app.listen(PORT, () => {
        console.log(`Server is now listening on localhost:${PORT}`);
      });
    }
  });
  return server;
}
