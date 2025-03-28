import { SetMetadata } from '@nestjs/common';

// Define the 'Roles' decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
