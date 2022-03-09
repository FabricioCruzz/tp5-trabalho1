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
import { NgChartsModule } from 'ng2-charts';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddTimeComponent,
    HomeComponent,
    SemPermissaoComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
