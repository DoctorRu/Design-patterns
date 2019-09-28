import { CreditCardAlgorithm } from './credit-card-algorithm';
import { PayPalAlgorithm } from './paypal-algorithm';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const cart: ShoppingCart = new ShoppingCart();
const pants: Product = new Product('234', 25);
const shirt: Product = new Product('987', 15);

cart.addProduct(pants);
cart.addProduct(shirt);

// payment decisions
cart.pay(new PayPalAlgorithm('joe@where.com', 'password'));
cart.pay(new CreditCardAlgorithm('joe doe', '12345'));




