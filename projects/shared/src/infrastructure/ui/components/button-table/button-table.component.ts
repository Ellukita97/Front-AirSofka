import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button-table',
  imports: [],
  templateUrl: './button-table.component.html',
  styleUrl: './button-table.component.scss'
})
export class ButtonTableComponent {
  @Input() icon!: string;
  @Input() buttonIndex!: number;
  @Input() rowIndex!: number;
  @Input() ariaLabel!: string;
  @Output() buttonClick = new EventEmitter<number>(); 

  handleClick(): void {
    this.buttonClick.emit(this.rowIndex);
  }
}
