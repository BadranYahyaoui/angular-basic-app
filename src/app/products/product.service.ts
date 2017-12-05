

import {IProduct} from "./product";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService{
   private productUrl='http://demo1092130.mockable.io/products';
  // private productUrl='../api/product/products.json';
  httpClient : HttpClient;
constructor(httpClient: HttpClient){
  this.httpClient=httpClient;

}
  getProducts() : Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl)
      // .do(data =>console.log('All :'+JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message)
  }
}
