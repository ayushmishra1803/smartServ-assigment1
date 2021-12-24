import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReponse } from './interface/product.interface';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'smart-Serv-assigment1';
  product$:Observable<ProductReponse>=new Observable()
  constructor(private httpService:HttpService){}
  ngOnInit(): void {
    this.product$=this.httpService.fetchProduct()
  }
}
