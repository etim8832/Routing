import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { RpductDetailComponent } from './rpduct-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, RpductDetailComponent]
})
export class ProductModule { }
