import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  public messages = new BehaviorSubject<string[]>(['first message']);
  public messages$ = this.messages.asObservable();

  addMessage(message: string): void {
    this.messages.next([...this.messages.value, message]);
  }

  clearMessages(): void {
    this.messages.next([]);
  }

  constructor() {
  }
}
