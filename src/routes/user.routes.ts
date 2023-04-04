import * as express from 'express'
import {ValidationError} from "class-validator";
import {transformAndValidateSync} from "class-transformer-validator";
import {UserModel} from "../models";
import {userRepository} from "../typeorm";

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
    res.send(await userRepository.find());
});

router.post<{}, {}, UserModel>('/', async (req: express.Request, res: express.Response) => {
    try {
        const model: UserModel = await transformAndValidateSync(UserModel, req.body) as UserModel;
        await userRepository.save(model.toEntity());
        res
            .status(200)
            .send({
                message: 'ok',
            })
    } catch (e) {
        if (e instanceof Array<ValidationError>) {
            const message: string = e.map((k: ValidationError) => Object.values(k?.constraints ?? {})?.join()).join();
            res
                .status(400)
                .send({
                    message,
                });
        } else {
            console.error(e);
            res.status(500).send({
                message: 'internal server error'
            });
        }

    }
});

export default router;
