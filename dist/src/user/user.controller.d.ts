import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findOne(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
}
