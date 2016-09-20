import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import postRouter from 'apis/postApi';

const app = express();

// ###########
// MIDDLEWARES
// ###########

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
