import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  constructor() {
  }

  messageFromParent: string = 'Message from parent';

  counter: number = 0;

  onMessageChange(message: string) {
    this.messageFromParent = message;
  }

  ngOnInit(): void {
  }

}
