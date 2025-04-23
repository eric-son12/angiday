import { Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./components/splash-screen/splash-screen.component').then((m) => m.SplashScreenComponent),
  },
  {
    path: 'location',
    loadComponent: () => import('./pages/location/location.page').then((m) => m.LocationPage),
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'product-detail',
    loadComponent: () => import('./pages/product-detail/product-detail.page').then((m) => m.ProductDetailPage),
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'order-confirmed',
    loadComponent: () => import('./pages/order-confirmed/order-confirmed.page').then( m => m.OrderConfirmedPage)
  },
  {
    path: 'order-detail',
    loadComponent: () => import('./pages/order-detail/order-detail.page').then( m => m.OrderDetailPage)
  },
];
