import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Products[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.GetProductAsync();
  }
  
public GetProductAsync():void
{
  this.productService.GetProducts().subscribe((data)=>{
    this.products=data;
  },(data)=>{console.error(data);
  });
}

}
