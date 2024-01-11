import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InputOutputComponent} from "./input-output/input-output.component";
import {ViewChildComponent} from "./view-child/view-child.component";
import {BehaviorSubjectComponent} from "./behavior-subject/behavior-subject.component";

const routes: Routes = [
  {path: '', redirectTo: '/input-output', pathMatch: 'full'},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'behavior-subject', component: BehaviorSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
