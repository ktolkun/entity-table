import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() isDisabled: boolean;
  @Output() buttonClick = new EventEmitter();

  constructor() {
  }
}
