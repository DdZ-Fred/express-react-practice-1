import express from 'express';

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

postRouter.get('/:id', ({ params: { id } }, res) => {
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
  ];
  if (id) {
    res.json(posts[id]);
  } else {
    res.json(posts);
  }
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
