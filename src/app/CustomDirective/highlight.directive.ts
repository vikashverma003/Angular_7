import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
   }
   @HostListener('mouseenter') onmouseenter(){
     this.highlight("green", "red");
   }

   @HostListener('mouseleave') onmouseleave(){
    this.highlight(null, null);
  }

   private highlight(bgcolor:string, txtcolor:string){
    this.el.nativeElement.style.backgroundColor=bgcolor;
    this.el.nativeElement.style.backgroundColor=txtcolor;

   }

}
