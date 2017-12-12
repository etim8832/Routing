import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductModule } from './product/product.module';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import {routing} from './app.rount';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
// import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    // ProductModule,
    PagenofoundComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
