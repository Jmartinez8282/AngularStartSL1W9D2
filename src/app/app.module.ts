import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { PublicModule } from './public/public.module';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,




  ],
  imports: [
    PublicModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
