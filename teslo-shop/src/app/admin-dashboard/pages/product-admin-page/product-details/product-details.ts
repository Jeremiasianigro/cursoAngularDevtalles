import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '@products/interfaces/product.interface';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";
import { FormUtils } from '@utils/form-utils';
import { FormErrorLabel } from '@shared/components/form-error-label/form-error-label';
import { ProductsService } from '@products/services/product.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'product-details',
  imports: [ProductCarousel, ReactiveFormsModule, FormErrorLabel],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {

  product = input.required<Product>();
  productsService = inject(ProductsService);
  router = inject(Router);

  fb = inject(FormBuilder);
  wasSabe = signal(false);

  imageFileList: FileList | undefined = undefined;
  tempImages = signal<string[]>([]);

  imagesToCarousel = computed(() => {
    const currentProductImages = [
      ... this.product().images,
      ... this.tempImages(),
    ]
    return currentProductImages;
  })


  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    slug: ['',
      [Validators.required, Validators.pattern(FormUtils.slugPattern)]
    ],
    price: ['',[Validators.required, Validators.minLength(0)]],
    stock: ['',[Validators.required, Validators.minLength(0)]],
    sizes: [['']],
    images: [[]],
    tags: [''],
    gender: ['',
      [Validators.required, Validators.pattern(/men|woman|kid|unisex/)]],
  });

  sizes = ['XS','S','M','L','XL','XXL',]

  ngOnInit(): void {
    this.setFormValue(this.product())
  }

  setFormValue(formLike: Partial<Product>){
    this.productForm.reset(this.product() as any)
    this.productForm.patchValue({tags: formLike.tags?.join(',')})
  }

  onSizeClicked(size: string){
    const currentSizes = this.productForm.value.sizes ?? [];

    if(currentSizes.includes(size)){
      currentSizes.slice(currentSizes.indexOf(size),1);
    }else{
      currentSizes.push(size)
    }

    this.productForm.patchValue({sizes: currentSizes})

  }

  async onSubmit(){
    const isValid = this.productForm.valid
    if(!isValid) return;

    const formValue = this.productForm.value;

    const productLike: Partial<Product> = {
      ...(formValue as any),
      tags:
        formValue.tags
        ?.toLowerCase()
        .split(',')
        .map((tag) => tag.trim() ?? []),
    };


    if(this.product().id === 'new'){
      const product = await firstValueFrom(
        this.productsService.createProduct(productLike, this.imageFileList)
      );

    }else{
      await firstValueFrom(
        this.productsService.updateProduct(this.product().id, productLike, this.imageFileList)
      )
    }

    this.wasSabe.set(true);
    setTimeout(()=>{
      this.wasSabe.set(false);
    }, 3000);


  }

onFileChanged(event: Event) {
  const filesList = (event.target as HTMLInputElement).files;
  this.imageFileList = filesList ?? undefined;

  const imageUrls = Array.from(filesList ?? []).map((file)=>
  URL.createObjectURL(file));

    this.tempImages.set(imageUrls);
  }

}
