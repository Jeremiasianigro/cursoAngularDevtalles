import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProductTable } from "@products/components/product-table/product-table";
import { ProductsService } from '@products/services/product.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { Pagination } from "@shared/components/pagination/pagination";

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, Pagination],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  productsPerPage = signal(10);

  productsResource = rxResource({
    params: () => ({
      limit: this.productsPerPage(),
      page: this.paginationService.currentPage() -1}),
    stream: ({params}) => this.productsService.getProducts({
      offset: params.page * 9,
      limit: params.limit
     }),
  });


 }
