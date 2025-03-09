import { Component, output } from '@angular/core';

@Component({
  selector: 'lib-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  closeDetails = output<boolean>();

  public closeDetailsHandler() {
    this.closeDetails.emit(true);
  }

}
