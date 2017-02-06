// TODO need to be deleted due to test.

import Router from 'koa-router';

import { getTestData } from '../controllers/test';

const router = new Router({ prefix: '/test' });

router.get('/hello', (ctx) => {
  ctx.body = 'Hello Robin';
});

router.get('/getTestData', getTestData);
router.post('/getTestData', getTestData);

export default router;
