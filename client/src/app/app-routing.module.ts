import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from 'src/app/Components/admin-form/admin-form.component';
import { LoginFormComponent } from 'src/app/Components/login-form/login-form.component';


const routes: Routes = [
  {path: "", component :  LoginFormComponent},
  {path: "add-item", component :  AdminFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [AdminFormComponent, LoginFormComponent]