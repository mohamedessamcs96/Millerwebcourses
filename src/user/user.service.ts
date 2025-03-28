import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUserDto });
  }

  async findAll(role?: 'USER' | 'ADMIN') {
    return this.databaseService.user.findMany({ where: { role } });
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({ where: { id } });
  }
}
