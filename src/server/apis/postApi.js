const express = require('express');
const PostModel = require('../models/Post');

const posts = [
  {
    id: 1,
    title: 'Post #1',
    body: 'Body #1',
    subtitle: 'Subtitle #1',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'Body #2',
    subtitle: 'Subtitle #2',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'Body #3',
    subtitle: 'Subtitle #3',
  },
  {
    id: 4,
    title: 'Post #4',
    body: 'Body #4',
    subtitle: 'Subtitle #4',
  },
  {
    id: 5,
    title: 'Post #5',
    body: 'Body #5',
    subtitle: 'Subtitle #5',
  },
  {
    id: 6,
    title: 'Post #6',
    body: 'Body #6',
    subtitle: 'Subtitle #6',
  },
  {
    id: 7,
    title: 'Post #7',
    body: 'Body #7',
    subtitle: 'Subtitle #7',
  },
];

const postRouter = express.Router({
  mergeParams: true,
});

postRouter.post('/', ({ body: { title, body, subtitle } }, res) => {
  console.log('[API-Post] POST request received');
  res.status(201).json({
    id: 4,
    title,
    body,
    subtitle,
  });
});

postRouter.get('/', (req, res) => {
  console.log('[API-Post] GET(All) request received');
  if (req.query) {
    // Filter results
  }
  res.json(posts);
});

postRouter.get('/:id', ({ params }, res) => {
  console.log('[API-Post] GET(id) request received');
  res.json(posts[params.id - 1]);
});

postRouter.put('/:id', (req, res) => {
  console.log('[API-Post] PUT request received');
});

postRouter.patch('/:id', (req, res) => {
  console.log('[API-Post] PATCH request received');
});

postRouter.delete('/:id', (req, res) => {
  console.log('[API-Post] DELETE request received');
});

module.exports = postRouter;
