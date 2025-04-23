import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    // Redirect to the login page
    return router.navigate(['/splash-screen']);
  }

  return true;
};
