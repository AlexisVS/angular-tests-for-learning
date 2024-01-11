import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputOutputComponent} from './input-output/input-output.component';
import {ChildComponent as InputOutputChildComponent} from './input-output/child/child.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {ChildComponent as ViewChildChildComponent} from './view-child/child/child.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {ChildComponent as BehaviorSubjectChildComponent} from './behavior-subject/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    InputOutputChildComponent,
    ViewChildComponent,
    ViewChildChildComponent,
    BehaviorSubjectComponent,
    BehaviorSubjectChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
