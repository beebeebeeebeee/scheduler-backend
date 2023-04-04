import {DataSource, Repository} from "typeorm";
import {ScheduleEntity, UserEntity} from "../entities";

const appDataSource = new DataSource({
    type: "sqlite",
    database: "data/database.db",
    synchronize: true,
    entities: [
        ScheduleEntity,
        UserEntity,
    ]
})

void appDataSource.initialize();

const scheduleRepository: Repository<ScheduleEntity> =
    appDataSource.getRepository<ScheduleEntity>(ScheduleEntity);

const userRepository: Repository<UserEntity> =
    appDataSource.getRepository<UserEntity>(UserEntity);

export {
    appDataSource,
    scheduleRepository,
    userRepository,
}
