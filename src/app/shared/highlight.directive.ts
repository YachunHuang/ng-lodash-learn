import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

import hljs from 'highlight.js';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements AfterViewInit {
  @Input('appHighlight') code = '';
  @Input() language = 'typescript';

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.code) {
      this.el.nativeElement.textContent = this.code;
    }
    this.el.nativeElement.classList.add(this.language);
    hljs.highlightElement(this.el.nativeElement);
  }
}