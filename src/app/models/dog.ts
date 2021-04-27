import { Animal } from './animal';

type StringOrNumber = string | number;

export class Dog extends Animal {
    constructor(
        public color: string,
        public height: StringOrNumber,
        public width: StringOrNumber
    ) {
        super(color);
    }
}
