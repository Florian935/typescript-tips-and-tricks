import { Dog } from './../models/dog';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partial-typescript-type',
    templateUrl: './partial-typescript-type.component.html',
    styleUrls: ['./partial-typescript-type.component.scss']
})
export class PartialTypescriptTypeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // We can't instanciate a Dog instance with only 1 or 2 properties. 3 properties are required
        const dog: Dog = new Dog('bleu', 20, '10cm');

        // We create an object with only color property.
        const dogWithMissingProperties = { color: 'bleu' };
        // As we can see, we can create a Dog with missing properties.
        const partialDog: Partial<Dog> = dogWithMissingProperties;
        console.log('Real dog:');
        console.log(dog);

        console.log('');
        console.log('Partial dog:');
        console.log(partialDog);
    }
}
