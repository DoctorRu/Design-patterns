import { Subject } from '../interface/subject';
import { Observer } from '../interface/observer';

export class EmailTopicSubscriber implements Observer {
    private _name: string;
    private _topic: Subject;

    constructor(name: string) {
        this._name = name;
    }

    update(): void {
        const msg: string = this._topic.getUpdate() as string;

        if (msg == null) {
            console.log(`${this._name} [no messages]\n`)
        } else {
            console.log(`${this._name} [new message] : ${msg}\n`)
        }
    }

    setSubject(subject: Subject): void {
        this._topic = subject;
    }

}