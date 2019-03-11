import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'test/:id', loadChildren: './test/test.module#TestPageModule' },
  { path: 'ptabs', loadChildren: './ptabs/ptabs.module#PtabsPageModule' },
  { path: 'progressbar', loadChildren: './progressbar/progressbar.module#ProgressbarPageModule' },
  // { path: 'ctasks', loadChildren: './ctasks/ctasks.module#CtasksPageModule' },
  // { path: 'atasks', loadChildren: './atasks/atasks.module#AtasksPageModule' },
  // { path: 'ptasks', loadChildren: './ptasks/ptasks.module#PtasksPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
