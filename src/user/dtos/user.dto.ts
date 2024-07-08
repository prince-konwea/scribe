import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {


  @IsString()
  readonly firstName: string;
  
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly occupation: string;

  @IsInt()
  readonly salary: number;
}