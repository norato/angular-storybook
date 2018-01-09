import { Directive, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {
  @Input() directiveAttr: number;

  constructor() { }
  ngOnInit() {
    console.log(this.directiveAttr);
  }

}
