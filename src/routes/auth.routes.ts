import * as express from 'express'

const router = express.Router()

router.get('/hello', (req: express.Request, res: express.Response) => {
    res.send('world!');
});

export default router;
