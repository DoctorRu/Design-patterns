import { Payment } from './../interface/payment';

export class CreditCardAlgorithm implements Payment {

    private _name: string;
    private _cardNumber: string;

    constructor(name: string, cardNumber: string) {
        this._name = name;
        this._cardNumber = cardNumber;
    }

    pay(amount: number): void {
        console.log(`${amount} paid with Card`);
    }

}