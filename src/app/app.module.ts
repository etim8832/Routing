import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductModule } from './product/product.module';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import {AppRoutingModule} from './app.rount';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PagenofoundComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
