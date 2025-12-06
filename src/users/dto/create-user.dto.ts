import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(4, 16)
  username: string;
  @IsString()
  @Length(8, 20)
  password: string;
}
