import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
import { Prisma, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(userDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.databaseService.user.create({
      data: { ...userDto, password: hashedPassword, role: Role.USER },
    });
    return this.generateToken(user);
  }

  async loginUser(email: string, password: string) {
    const user = await this.databaseService.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateToken(user);
  }

  private generateToken(user: { id: number; email: string; role: Role }) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
