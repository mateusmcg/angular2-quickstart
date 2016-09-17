import { NgModule, Directive, ElementRef, Input, Renderer } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [HeaderDirective]
})
export class AppDirectivesModule { }


@Directive({
    selector: '[appHeader]'
})
export class HeaderDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}