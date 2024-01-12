import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubjectService} from "./behavior-subject.service";

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  // Out of the exercise scope but this is how you can use ViewChild too for handling HTML elements
  @ViewChild('input') input?: ElementRef<HTMLInputElement>

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
