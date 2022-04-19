import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private color:ElementRef) { 

    this.color.nativeElement.style.color = 'greenyellow';
    this.color.nativeElement.style.fontSize = '15px';
    this.color.nativeElement.style.fontWeight = 'bold';
    this.color.nativeElement.style.fontStyle = 'italic';
  }

}
