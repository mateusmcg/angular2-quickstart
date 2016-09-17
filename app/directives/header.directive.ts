import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[appHeader]'
})

export class HeaderDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}