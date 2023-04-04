import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryColumn({
        type: "text"
    })
    name: string;

    @Column({
        type: "text"
    })
    color: string;

}