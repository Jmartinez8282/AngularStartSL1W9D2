import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';



const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'sign-up', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
