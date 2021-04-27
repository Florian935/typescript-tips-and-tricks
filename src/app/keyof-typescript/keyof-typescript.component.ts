import { Dog } from './../models/dog';
import { Cat } from './../models/cat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyof-typescript',
  templateUrl: './keyof-typescript.component.html',
  styleUrls: ['./keyof-typescript.component.scss']
})
export class KeyofTypescriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // console.log = "color" | "breed" | "height" | "width"
      type MyType = keyof Cat | keyof Dog;

      // We can create a const which contain the below values only: "color", "breed", "height" or "width"
      const type: MyType = 'color';
  }

}
