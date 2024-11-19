// order-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { OrderService, AlertService, ProductService } from '@app/_services';


@Component({ templateUrl: 'order-form.component.html' })
export class OrderFormComponent implements OnInit {
    form!: FormGroup;
    id: string | undefined;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;
    products: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService,
        private productService: ProductService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // Load products for dropdown
        this.loadProducts();

        this.form = this.formBuilder.group({
            productId: ['', Validators.required],
            totalAmount: ['', [Validators.required, Validators.min(0)]],
            shippingAddress: ['', Validators.required],
            createdAt: [Date(), Validators.required]
        });

        this.title = 'Create Order';
        if (this.id) {
            this.title = 'Edit Order';
            this.loading = true;
            this.orderService.getOrderById(this.id)
                .pipe(first())
                .subscribe(order => {
                    this.form.patchValue(order);
                    this.loading = false;
                });
        }
    }

    loadProducts() {
        this.productService.getProduct()
            .pipe(first())
            .subscribe(products => {
                this.products = products.filter(p => p.productStatus === 'active');
            });
    }

    // Update price when product is selected
    onProductSelect(event: any) {
        const selectedProduct = this.products.find(p => p.id === +event.target.value);
        if (selectedProduct) {
            this.form.patchValue({
                price: selectedProduct.price
            });
        }
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        this.alertService.clear();

        if (this.form.invalid) {
            return;
        }

        this.submitting = true;

        let saveOrder: () => any;
        let message: string;

        if (this.id) {
            saveOrder = () => this.orderService.updateOrder(this.id!, this.form.value);
            message = 'Order updated';
        } else {
            saveOrder = () => this.orderService.createOrder(this.form.value);
            message = 'Order created';
        }

        saveOrder()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success(message, { keepAfterRouteChange: true });
                    this.router.navigateByUrl('/order');
                },
                error: (error: any) => {
                    const errorMessage = error.message || 'An error occurred';
                    this.alertService.error(errorMessage);
                    this.submitting = false;
                }
            });
    }
}