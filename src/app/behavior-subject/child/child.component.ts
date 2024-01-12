import {Component, OnInit} from '@angular/core';
import {BehaviorSubjectService} from "../behavior-subject.service";

@Component({
  selector: 'app-behavior-subject-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public messages?: string[];

  constructor(
    private behaviorSubjectService: BehaviorSubjectService
  ) {
  }

  onAddMessage(message: string): void {
    this.behaviorSubjectService.addMessage(message);
  }

  onClearMessages(): void {
    this.behaviorSubjectService.clearMessages();
  }

  ngOnInit(): void {
    this.behaviorSubjectService.messages$.subscribe(messages => this.messages = messages);
  }


}
