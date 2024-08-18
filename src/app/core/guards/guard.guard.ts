import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
 
  if(inject(AuthService).session) 
    {return true} 
  else
    { inject(Router).navigateByUrl('login')
      return false};
};
