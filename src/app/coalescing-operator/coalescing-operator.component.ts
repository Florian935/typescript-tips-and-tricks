import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coalescing-operator',
  templateUrl: './coalescing-operator.component.html',
  styleUrls: ['./coalescing-operator.component.scss']
})
export class CoalescingOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      let a;
      // Coalescing operator is a shorthand to assign a default value when source value
      // is undefined or null.
      a ??= 'Coalescing operator !';

      // it's also possible to write:
      // a = a ?? 'Coalescing operator !';
      console.log(a);
  }

}
