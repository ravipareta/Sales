import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { WebComponent } from './web/web.component';
import { ProductComponent } from './Web/product/product.component';
import { LoginComponent } from './Web/login/login.component';
import { RegisterComponent } from './Web/register/register.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WebComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
