import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  // selector: 'badran-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string;
  product:IProduct;
  _productService: ProductService;

  constructor(private _route:ActivatedRoute,
              private _router:Router,
              productService: ProductService
              ) {
    this._productService=productService;
  }

  ngOnInit() {
    let id=this._route.snapshot.paramMap.get( 'id');
    this.pageTitle=id;
    this._productService.getProducts().subscribe(
      data => {
        this.product = data.
        filter(x => x.productId == <any> id)[0];
        },
      error =>this._router.navigate(['/products'])

    );


  }

  onBack(){
    this._router.navigate(['/products'])
  }


}
