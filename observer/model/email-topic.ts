import { Observer } from '../interface/observer';
import { Subject } from '../interface/subject';

export class EmailTopic implements Subject {

    private _observers: Observer[];
    private _message: string;

    constructor() {
        this._observers = [];
    }
    register(observer: Observer): void {
        if (observer == null) {
            throw new Error('Null object');
        }

        if (!this._observers.includes(observer)) {
            this._observers.push(observer);
        }

    }

    unregister(observer: Observer): void {
        // Pending: Remover item específico e não o último item
        this._observers.pop();
    }

    notifyObservers() {
        for (const observer of this._observers) {
            observer.update();
        }
    }

    getUpdate(): any {
        return this._message;
    }

    postMessage(msg: string): void {
        console.log(`[Message posted to my topic: ${msg}]\n\n`);
        this._message = msg;
        this.notifyObservers();
    }

}