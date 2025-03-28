import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';


@Controller('auth') 
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register') 
  async register(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.authService.registerUser(createUserDto);
  }


  @Post('login')
  async login(@Body() { email, password }) {
    return this.authService.loginUser(email, password);
  }
}
