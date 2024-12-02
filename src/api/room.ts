import { IsInt, IsString, IsNotEmpty, IsDate, minLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlayerDto } from './player';

export enum RoomStatus {
    Opened = 'opened',
    Closed = 'closed'
}

export class RoomDto {
    @ApiProperty()
    @IsInt()
    id: number;

    @ApiProperty()
    @IsInt()
    hostId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsInt()
    exchange: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: RoomStatus;

    @ApiProperty({type: [PlayerDto]})
    players: PlayerDto[]

    @ApiProperty()
    @IsDate()
    createdAt: Date;
}


export class CreateRoomDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsInt()
    exchange: number;

    @ApiProperty()
    @IsInt()
    hostId: number;
}