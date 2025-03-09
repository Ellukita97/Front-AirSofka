import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: 'lib-accordion',
  imports: [DetailsComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  public accordionElements = viewChildren<ElementRef>('accordion');

  public actionClosedDetails(event: boolean) {
    if (event) {
      this.closeAllAccordions();
      console.log('closeAllAccordions', event);
      
    }
  }

  public closeAllAccordions() {
    if (this.accordionElements) {
      this.accordionElements().forEach(elementRef => {
        const detailsElement: HTMLDetailsElement = elementRef.nativeElement;
        detailsElement.open = false;
      });
    }
  }


}
