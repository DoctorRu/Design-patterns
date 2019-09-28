import { Payment } from './../interface/payment';

export class PayPalAlgorithm implements Payment {

    private _email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password
    }

    pay(amount: number): void {
        console.log(`${amount} paid with PayPal`)
    }

}