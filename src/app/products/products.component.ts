import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  pageTitle: string = "Product list";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  _listFilter: string;
  products: IProduct[];
  _productService: ProductService;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ?
      this.performFilter(this.listFilter) : this.products
  }


  constructor(productService: ProductService) {
    this._productService = productService;


  }

  ngOnInit() {
    console.log('init product component');
    this._productService.getProducts().subscribe(
      data => {this.products = data;
        this.filteredProducts=data},
      error =>this.errorMessage=<any>error

    );

    this.listFilter = '';

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterdBy: string): IProduct[] {
    filterdBy = filterdBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterdBy) !== -1
    );
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message;
  }

}
