export class Product {
    private _upcCode: string;
    private _price: number;

    constructor(upcCode: string, price: number) {
        this._upcCode = upcCode;
        this._price = price;
    }

    get upcCode(): string {
        return this._upcCode;
    }

    set upcCode(val: string) {
        this._upcCode = val;
    }

    get price(): number {
        return this._price
    }

    set price(val: number) {
        this._price = val;
    }
}