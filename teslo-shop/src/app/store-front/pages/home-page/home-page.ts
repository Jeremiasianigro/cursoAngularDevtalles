import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';



import { ProductCard } from '@products/components/product-card/product-card';
import { ProductsService } from '@products/services/product.service';
import { Pagination } from "@shared/components/pagination/pagination";

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {
  productsService = inject(ProductsService)

  productsResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => this.productsService.getProducts({}),
    });
 }
