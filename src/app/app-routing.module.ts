import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'secondPage', component: SecondPageComponent },
  { path: 'thirdPage', component: ThirdPageComponent },
  { path: '', redirectTo: '/firstPage', pathMatch: 'full'},
];


// const routes: Routes = [
//   { path: 'firstPage', loadChildren: () => import('./first-page/first-page.component').then(m => m.FirstPageComponent) },
//   { path: 'secondPage', loadChildren: () => import('./second-page/second-page.component').then(m => m.SecondPageComponent) },
//   { path: 'thirdPage', loadChildren: () => import('./third-page/third-page.component').then(m => m.ThirdPageComponent) },
//   { path: '', redirectTo: '/firstPage', pathMatch: 'full'},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
