import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReponse } from '../interface/product.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  fetchProduct(): Observable<ProductReponse> {
    return this.httpClient
      .get<ProductReponse>(
        `https://s3.amazonaws.com/open-to-cors/assignment.json`
      )
      .pipe(
        map((response) => {
          const products: any[] = [...Object.values(response.products)];
          const sortedProductList: any[] = products.sort(
            (a, b) => b.popularity - a.popularity
          );
           return {
            count: response.count,
            products: [...sortedProductList],
          };
        })
      );
  }
}
