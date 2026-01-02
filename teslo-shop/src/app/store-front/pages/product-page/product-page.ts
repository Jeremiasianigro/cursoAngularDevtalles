import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
})
export class ProductPage {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];


    productsResource = rxResource({
    params: () => ({idSlug: this.productIdSlug}),
     stream: ({ params }) => this.productService.getProductByIdSlug(params.idSlug),
    });


}
