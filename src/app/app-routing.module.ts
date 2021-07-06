import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './Web/login/login.component';
import { ProductComponent } from './Web/product/product.component';
import { RegisterComponent } from './Web/register/register.component';

const routes: Routes = [
  {path:"",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
