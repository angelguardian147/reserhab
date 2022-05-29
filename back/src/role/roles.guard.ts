import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IRole } from 'src/interfaces/role.interface';
import { ERole } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate( context: ExecutionContext, ): boolean{

    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if(!requiredRoles){
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return this.hasRole(requiredRoles, user.role);
    
  }  

  hasRole(role: string[], roles: IRole[]): boolean{
    let findRole: boolean = false;
    roles.forEach(item => {
      findRole = this.hasRoles(item.name, role);
    });
    return findRole;
  }

  hasRoles(role: string, roles: string[]): boolean{
    let findRole: boolean = false;
    roles.forEach(item => {
      if(item == role){
        findRole = true;
      }
    });
    return findRole;
  }

}
