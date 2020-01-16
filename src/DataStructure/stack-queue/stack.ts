import { IStack } from "@Interface/specific";
import { AbstractStack } from "@Entity/abstract";
import { Errors } from "@Utils/error-handling";

export class StackFactory {

    /**Recommend implementing Stack by Linked List, so no parameter needs to pass */
    static create<T>(capacity?: number): IStack<T> {
        if (capacity) return new StaticStack<T>(capacity);

        return new DynamicStack<T>();
    }

}

class StaticStack<T> extends AbstractStack<T> {

    constructor(capacity: number) {
        super(capacity);
    }

    push(...values: T[]): this {
        for (const value of values) {
            if (this._list.size >= this._capacity) {
                throw new Errors.OutOfBoundary(Errors.Msg.NoMoreSpace);
            }
            this._list.insertAtHead(value);
        }

        return this;
    }
}

class DynamicStack<T> extends AbstractStack<T> {

    constructor() {
        super()
    }

    push(...values: T[]): this {
        this._list.insertAtHead(...values);
        return this;
    }
}