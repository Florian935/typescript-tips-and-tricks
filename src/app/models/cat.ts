import { Animal } from './animal';

export class Cat extends Animal {
    constructor(public color: string, public breed: string) {
        super(color);
    }
}
