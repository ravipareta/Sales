import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient ) { }
  RootUrl:string="http://localhost:56134/api/Product";

  public GetProducts():Observable<any>
  {
    return this.httpClient.get(this.RootUrl);
  }
  public PostProduct(product:Products):Observable<any>{
    return this.httpClient.post(this.RootUrl,product);
  }
}
