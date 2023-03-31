import {LeaveTimeEnum, LeaveTypeEnum} from "../enums";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ScheduleEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: "text"
    })
    name: string;

    @Column({
        type: "boolean"
    })
    planned: boolean;

    @Column({
        type: "text"
    })
    leaveType: LeaveTypeEnum;

    @Column({
        type: "text"
    })
    leaveTime: LeaveTimeEnum;

    @Column({
        type: "text"
    })
    start: string;

    @Column({
        type: "text"
    })
    end: string;

}