import { NgModule } from '@angular/core';
import {ProductsComponent} from "./products.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ConvertToSpacesPipe} from "../myCustomPipes/convert-to-spaces";
import {RouterModule} from "@angular/router";
import {ProductService} from "./product.service";
import {ProductGuardService} from "./product-guard.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id',
        canActivate:[ProductGuardService]
        , component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,



  ],
  providers:[
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
