import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from 'src/app/Components/admin-components/components/admin-form/admin-form.component';
import { LoginFormComponent } from 'src/app/Components/login-form/login-form.component';
import { AdminHomeComponent } from 'src/app/Components/admin-components/components/admin-home/admin-home.component';
import { AdminViewProductsComponent } from 'src/app/Components/admin-components/components/admin-view-products/admin-view-products.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      { path: '', redirectTo: 'add-item', pathMatch: 'full' },
      { path: 'add-item', component: AdminFormComponent },
      { path: 'view-products', component: AdminViewProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AdminFormComponent,
  LoginFormComponent,
  AdminHomeComponent,
  AdminViewProductsComponent
];
