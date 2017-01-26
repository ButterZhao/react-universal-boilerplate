import Router from 'koa-router';

const router = new Router({prefix: '/test'});

router.get('/hello', (ctx) => {
    ctx.body = "Hello Robin";
})

export default router;
