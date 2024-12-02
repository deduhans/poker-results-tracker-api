import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, MinLength, Min } from "class-validator";

export class UserDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @Min(3)
    username: string;
}
