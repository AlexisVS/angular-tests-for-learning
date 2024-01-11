import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild(ChildComponent) childComponent?: ChildComponent;

  messageFromParent: string = 'Message from parent';

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.messageFromParent = this.childComponent?.messageFromChild!;

    // Needed for updating the parent the view
    this.changeDetectorRef.detectChanges();
  }


}
