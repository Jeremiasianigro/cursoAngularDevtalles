import { Component, inject, input } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'product-details',
  imports: [ProductCarousel, ReactiveFormsModule],
  templateUrl: './product-details.html',
})
export class ProductDetails {
  product = input.required<Product>();

  fb = inject(FormBuilder);





  sizes = ['SX','S','M','L','XL','LXX',]
}
