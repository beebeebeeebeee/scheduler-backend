import {IsBoolean, IsDateString, IsDefined, IsEnum, IsNotEmpty, IsString} from "class-validator";
import {LeaveTimeEnum, LeaveTypeEnum} from "../enums";
import {ScheduleEntity} from "../entities";

export class ScheduleModel {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    private name: string;

    @IsBoolean()
    @IsDefined()
    private planned: boolean;

    @IsEnum(LeaveTypeEnum)
    @IsDefined()
    private leaveType: LeaveTypeEnum;

    @IsEnum(LeaveTimeEnum)
    @IsDefined()
    private leaveTime: LeaveTimeEnum;

    @IsDateString()
    @IsDefined()
    private start: string;

    @IsDateString()
    @IsDefined()
    private end: string;

    public toEntity(): ScheduleEntity {
        return {
            name: this.name,
            planned: this.planned,
            leaveType: this.leaveType,
            leaveTime: this.leaveTime,
            start: this.start,
            end: this.end,
        }
    }

}