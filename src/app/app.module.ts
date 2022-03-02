import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './cadastro/login/login.component';
import { AddTimeComponent } from './cadastro/add-time/add-time.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './cadastro/login/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SemPermissaoComponent } from './cadastro/sem-permissao/sem-permissao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddTimeComponent,
    HomeComponent,
    SemPermissaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
