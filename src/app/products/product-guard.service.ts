import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductGuardService implements CanActivate{


  constructor(private _router:Router) {
  }
  canActivate(route:ActivatedRouteSnapshot): boolean {
    let id = + route.url[1].path;
    if (isNaN(id)||id<1){
      alert("invalid product  Id");
      this._router.navigate(['/products']);
      return false
    }

    return true;
  }


}
