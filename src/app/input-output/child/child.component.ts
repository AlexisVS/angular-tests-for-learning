import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';
  @Output() messageChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() counter: number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  onUpdateMessage(message: string) {
    this.messageChange.emit(message);
  }

  onCounterIncrement() {
    this.counter = this.counter + 1;
    this.counterChange.emit(this.counter);
  }

  onCounterDecrement() {
    this.counter = this.counter - 1;
    this.counterChange.emit(this.counter);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
