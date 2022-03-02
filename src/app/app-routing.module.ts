import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cadastro/login/login.component';
import { AddTimeComponent } from './cadastro/add-time/add-time.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SemPermissaoComponent } from './cadastro/sem-permissao/sem-permissao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: AddTimeComponent, canActivate: [AuthGuard], },
  { path: 'sem-permissao', component: SemPermissaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
