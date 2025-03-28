export class CreateUserDto {
    username: string;
    email: string;
    password: string;
  }
  
// import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// export class CreateUserDto {
//   @IsNotEmpty()
//   username: string;

//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   @MinLength(6)
//   password: string;
// }
