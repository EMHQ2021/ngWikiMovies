import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PrivateRouteGuard } from './guards/private-route.guard';
import { PublicRouteGuard } from './guards/public-route.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'detail/:idMovie',
        component: DetailComponent,
      },
    ],
    canActivate: [PrivateRouteGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicRouteGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [PublicRouteGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
