import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    createUser(createUserDto: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(role?: 'USER' | 'ADMIN'): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
}
