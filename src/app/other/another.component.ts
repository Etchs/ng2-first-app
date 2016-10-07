import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
      <ng-content></ng-content>
      {{name}}
    </article>
  `,
  styles: [`
    article {
    border: 1px solid black;
    }
  `]
})
export class AnotherComponent {
  name = 'another Works!';
}
