import { Component, inject, input, OnInit } from '@angular/core';

import { Product } from '@products/interfaces/product.interface';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@utils/form-utils';

@Component({
  selector: 'product-details',
  imports: [ProductCarousel, ReactiveFormsModule],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  product = input.required<Product>();

  fb = inject(FormBuilder);

  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    slug: ['',
      [Validators.required, Validators.pattern(FormUtils.slugPattern)]
    ],
    price: ['',[Validators.required, Validators.minLength(0)]],
    stock: ['',[Validators.required, Validators.minLength(0)]],
    size: [['']],
    images: [[]],
    tags: [''],
    gender: ['',
      [Validators.required, Validators.pattern(/men|woman|kid|unisex/)]],
  });

  sizes = ['SX','S','M','L','XL','LXX',]

  ngOnInit(): void {
    this.setFormValue(this.product())
  }

  setFormValue(formLike: Partial<Product>){
    this.productForm.reset(this.product() as any)
    this.productForm.patchValue({tags: formLike.tags?.join(',')})
  }

  onSubmit(){
    console.log(this.productForm.value)
  }
}
