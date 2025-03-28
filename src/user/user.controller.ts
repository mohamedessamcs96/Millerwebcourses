import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(@Query('role') role?: 'USER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
