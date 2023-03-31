import * as express from 'express'
import {ValidationError} from "class-validator";
import {transformAndValidateSync} from "class-transformer-validator";
import {ScheduleModel} from "../models";
import {scheduleRepository} from "../typeorm";
import {ScheduleEntity} from "../entities";

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
    res.send(await scheduleRepository.find());
});

router.post<{}, {}, ScheduleModel>('/', async (req: express.Request, res: express.Response) => {
    try {
        const model: ScheduleModel = await transformAndValidateSync(ScheduleModel, req.body) as ScheduleModel;
        await scheduleRepository.save(model.toEntity());
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

router.patch<{}, {}, ScheduleModel>('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const entity: ScheduleEntity = (await transformAndValidateSync(ScheduleModel, { ...req.body}) as ScheduleModel).toEntity();
        entity.id = parseInt(req.params.id);
        await scheduleRepository.save(entity);
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

router.delete<{}, {}, ScheduleModel>('/:id', async (req: express.Request, res: express.Response) => {
    try {
        await scheduleRepository.delete({id: parseInt(req.params.id)})
        res
            .status(200)
            .send({
                message: 'ok',
            })
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: 'internal server error'
        });
    }
});

export default router;
