import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: Prisma.UserCreateInput): Promise<{
        accessToken: string;
    }>;
    login({ email, password }: {
        email: any;
        password: any;
    }): Promise<{
        accessToken: string;
    }>;
}
