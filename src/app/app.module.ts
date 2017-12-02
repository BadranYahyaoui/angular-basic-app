import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {ConvertToSpacesPipe} from "./myCustomPipes/convert-to-spaces";
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductsComponent]
})
export class AppModule { }
