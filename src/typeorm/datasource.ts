import {DataSource, Repository} from "typeorm";
import {ScheduleEntity} from "../entities";

const appDataSource = new DataSource({
    type: "sqlite",
    database: "data/database.db",
    synchronize: true,
    entities: [
        ScheduleEntity
    ]
})

void appDataSource.initialize();

const scheduleRepository: Repository<ScheduleEntity> =
    appDataSource.getRepository<ScheduleEntity>(ScheduleEntity);

export {
    appDataSource,
    scheduleRepository,
}
