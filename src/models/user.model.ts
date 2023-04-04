import {IsDefined, IsNotEmpty, IsString} from "class-validator";
import {UserEntity} from "../entities";

export class UserModel {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    private name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    private color: string;

    public toEntity(): UserEntity {
        return {
            name: this.name,
            color: this.color,
        }
    }

}