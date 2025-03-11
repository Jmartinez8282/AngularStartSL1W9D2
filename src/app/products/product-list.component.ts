import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {

pageTitle: string = "Product List";
imageWidth: number = 100;
imageMargin: number = 2;
showImage:boolean = true;


private _listFilter: string = '';

get listFilter(): string {
  return this._listFilter
}

set listFilter(value:string) {
  this._listFilter = value;
  console.log("In setter we have this value:", value)
  this.filteredProducts = this.performFilter(value)
}

filteredProducts: IProduct[] = [];

products :IProduct[] = [];
constructor(private ProductsService: ProductsService) {}

performFilter(filterBy:string):IProduct[] {
  filterBy = filterBy.toLowerCase()
  return this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(filterBy))

}

toggleImage(): void {
  this.showImage = !this.showImage
}

ngOnInit(): void {
  this.products = this.ProductsService.getProducts();

  this.filteredProducts = this.products
}

onRatingClicked(message: string): void {
  this.pageTitle = 'Product List: ' + message
}



}
