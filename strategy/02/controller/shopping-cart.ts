import { Payment } from './../interface/payment';
import { Product } from './product';

export class ShoppingCart {

    productList: Product[];

    constructor() {
        this.productList = [];
    }

    addProduct(product: Product): void {
        this.productList.push(product);
    }

    removeProduct(product: Product): void {
        this.productList.pop();
    }

    calculateTotal(): number {
        let sum: number = 0;

        for (const product of this.productList) {
            sum += product.price;
        }

        return sum;
    }

    pay(paymentStrategy: Payment): void {
        const amount: number = this.calculateTotal();
        paymentStrategy.pay(amount);
    }
}