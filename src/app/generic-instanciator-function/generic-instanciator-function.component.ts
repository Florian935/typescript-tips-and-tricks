import { Dog } from './../models/dog';
import { Cat } from './../models/cat';
import { Component, OnInit } from '@angular/core';
import { GenericInstanciatorService } from '@services/generic-instanciator.service';

@Component({
    selector: 'app-generic-instanciator-function',
    templateUrl: './generic-instanciator-function.component.html',
    styleUrls: ['./generic-instanciator-function.component.scss']
})
export class GenericInstanciatorFunctionComponent implements OnInit {

    constructor(private _genericInstanciatorService: GenericInstanciatorService) { }

    ngOnInit(): void {
        const cat: Cat = this._genericInstanciatorService.genericInstanciator<Cat>(Cat, 'rouge', 'Persian');
        const dog: Dog = this._genericInstanciatorService.genericInstanciator<Dog>(Dog, 'rouge', '30', 10);
        console.log(cat);
        console.log(dog);
    }
}
