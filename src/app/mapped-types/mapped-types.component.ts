import { Cat } from './../models/cat';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mapped-types',
    templateUrl: './mapped-types.component.html',
    styleUrls: ['./mapped-types.component.scss']
})
export class MappedTypesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        type Readonly<T> = {
            readonly [P in keyof T]: T[P]
        };

        // Cannot create this constant because "breed" property is missing
        // const cat1: Readonly<Cat> = { color: 'red' };

        const cat2: Readonly<Cat> = { color: 'red', breed: 'Persian' };
        // We can't assign a value because all properties are read only
        // cat2.breed = 'toto';

        /* Explication de la syntaxe: type Readonly<T> = {
                                        readonly [P in keyof T]: T[P]
                                      };
            - On définit un type qui prend un type générique;
            - Entre crochet, nous avons l'opérateur "keyof T" qui représente tous les noms
            (sous forme d'union) de la propriété de type T.
            - Le mot clé "in" indique que nous avons affaire à un Mapped Type.
            - [P in keyof T]: T[P] indique que le type de CHAQUE propriété P de type T doit
            être transformé en T[P].
            - Le type T[P] réprésente le type de la propriété P du type T.

            En d'autres termes, on indique que pour chaque (in) propriété (P) contenu dans l'objet
            fourni (T), on aura pour chacune des propriétés en tant que type le type de la propriété (T[P])
            Le mot clé "in" est donc un mapper, il itère sur chaque propriétés de l'objet fourni.

            Autre exemple: type Partial<T> = {
                            [P in keyof T]?: T[P]
                           };
        */

        // Mapped types avancé avec ajout d'une propriété:
        type ReadonlyWithNewProperty<T> = {
            readonly [P in keyof T]: T[P]
        } & { readonly eyes: string };

        // Cannot create this constant because "eyes" property is missing
        // const cat3: ReadonlyWithNewProperty<Cat> = { color: 'red', breed: 'Persian' };

        const cat4: ReadonlyWithNewProperty<Cat> = { color: 'red', breed: 'Persian', eyes: 'blue' };
        // Can't assign because eyes is readonly
        // cat4.eyes = 'brown';

        // Autre syntaxe d'un Mapped types en mappant un type existant (et non pas un objet) avec seulement le mot clé in:
        type StringOrNumber = 'option1' | 'option2';

        type TypeMappedStringOrNumber = {
            [K in StringOrNumber]: K
        };

        // Cannot do bellow assignment because we expect that the key and value names are equals to either
        // option1: 'option1' or option2: 'option2'.
        // Why ? Because we iterate on types of "StringOrNumber" types and properties and we say that the
        // property name are option1 and type is 'option1' and in the second iteration the property name
        // is option2 and type is 'option2'.
        // const typeMappedWrong: TypeMappedStringOrNumber = { value: true };
        const typeMapped: TypeMappedStringOrNumber = { option1: 'option1', option2: 'option2' };
    }
}
