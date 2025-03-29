import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';
export declare class AuthService {
    private readonly databaseService;
    private readonly jwtService;
    constructor(databaseService: DatabaseService, jwtService: JwtService);
    registerUser(userDto: Prisma.UserCreateInput): Promise<{
        accessToken: string;
    }>;
    loginUser(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    private generateToken;
}
