import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GenericInstanciatorService {

    constructor() { }

    genericInstanciator<T>(constructor: new (...args: any[]) => T, ...args: any[] ): T {
        return new constructor(...args);
    }
}
