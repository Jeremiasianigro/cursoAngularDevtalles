import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/product.service';
import { ProductDetails } from "./product-details/product-details";

@Component({
  selector: 'app-product-admin-page',
  imports: [ProductDetails],
  templateUrl: './product-admin-page.html',
})
export class ProductAdminPage {

  activatedRute = inject(ActivatedRoute);
  router = inject(Router);
  ProductService = inject(ProductsService);

  productId = toSignal(
    this.activatedRute.params.pipe(map((params)=> params['id']))
  );

  productResource = rxResource({
    params: () => ({id: this.productId()}),
    stream: ({params}) => {
      return this.ProductService.getProductById(params.id)
    }
  });

  redirectEffect = effect(()=>{
    if(this.productResource.error()){
      this.router.navigate(['/admin/products'])
    }
  })

}
