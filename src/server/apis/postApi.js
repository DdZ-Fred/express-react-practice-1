import express from 'express';

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
  res.status(201).json({
    id: 4,
    title,
    body,
    subtitle,
  });
});

postRouter.get('/', (req, res) => {
  if (req.query) {
    // Filter results
  }
  res.json(posts);
});

postRouter.get('/:id', ({ params }, res) => {
  res.json(posts[params.id - 1]);
});

postRouter.put('/:id', (req, res) => {
  console.log('[PUT] Post requested');
});

postRouter.patch('/:id', (req, res) => {
  console.log('[PATCH] Post requested');
});

postRouter.delete('/:id', (req, res) => {
  console.log('[DELETE] Post requested');
});

export default postRouter;
