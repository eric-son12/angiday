import { Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'splash-screen',
    component: SplashScreenComponent,
  },
  {
    path: 'product-detail',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage,
      ),
  },
];
