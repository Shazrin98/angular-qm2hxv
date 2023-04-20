import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  products: Product[];
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });

    this.productForm = this.fb.group({
      thumbnail: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const product: Product = {
      thumbnail: this.productForm.value.thumbnail,
      title: this.productForm.value.title,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
    };
    this.productService.addProduct(product).subscribe(() => {
      this.productForm.reset();
      this.products.push(product);
    });
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.products = this.products.filter((p) => p !== product);
    });
  }
}
