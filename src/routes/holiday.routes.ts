import * as express from 'express'
import {ValidationError} from "class-validator";
import {transformAndValidateSync} from "class-transformer-validator";
import {ScheduleModel} from "../models";
import {scheduleRepository} from "../typeorm";
import axios from "axios";

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
    res.send((await axios.get('https://www.1823.gov.hk/common/ical/en.json')).data);
});

export default router;
