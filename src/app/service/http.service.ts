import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductReponse } from "../interface/product.interface";

@Injectable({
  providedIn:'root'
})
export class HttpService{
  constructor(private httpClient:HttpClient){}
  fetchProduct():Observable<ProductReponse>{
    return this.httpClient.get<ProductReponse>(`https://s3.amazonaws.com/open-to-cors/assignment.json`)
  }
}
