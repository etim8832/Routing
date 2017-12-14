import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';

const routes: Routes = [
  {path:'products',component:ProductDetailComponent},
  {path:'product/:id',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
