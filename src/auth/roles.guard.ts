import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(' Required Roles:', requiredRoles);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    console.log(' User from request:', user);  // Debugging log
    
    if (!user) {
      console.warn(' No user found in request');
      return false;
    }

    const hasRole = user.role && requiredRoles.includes(user.role);
    console.log(' User Role:', user.role, '| Allowed:', hasRole);

    return hasRole;
  }
}
