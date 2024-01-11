import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() message: string = '';

  messageFromChild: string = 'Message from child';

  constructor() {
  }


}
