import { Component } from '@angular/core';
import { ProductdataService } from 'src/service/productdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  productArray:any = [
    {
      id: "",
      price: "",
      description: "",
      category: "",
      image: ""

    }
  ];
  price:any;
  
  // bgcolor:"yellow";
  
constructor(private productService:ProductdataService){
      this.productService.getData().subscribe(data => {
      console.log(data);
      this.productArray = data;
    });
  }

  deleteproduct(data){
    this.productService.deleteData(data).subscribe(data => {
      // this.productService.getData();
      console.log(data);
      
    })
  }

  // getColor(price){
  //   if(price<50){
  //     this.bgcolor = this.color;
  //   }
  // }

}