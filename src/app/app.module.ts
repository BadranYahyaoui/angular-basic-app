import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {ConvertToSpacesPipe} from "./myCustomPipes/convert-to-spaces";
import { StarComponent } from './star/star.component';
import {ProductService} from "./products/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,ProductsComponent,]
})
export class AppModule { }
