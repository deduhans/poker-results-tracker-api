import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, MinLength } from "class-validator";
import { PaymentDto } from "./payment";

export enum PlayerRole {
    Host = 'host',
    Player = 'player',
}

export class PlayerDto {
    @ApiProperty()
    @IsNumber()
    id: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    roomId: number;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    role: PlayerRole;

    @ApiProperty({type: [PaymentDto]})
    payments: PaymentDto[]

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}

export class CreatePlayerDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    roomId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
}
