import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushupGoalRegistComponent } from './pushup-goal-regist.component';

const routes: Routes = [
  {
      path: '',
      component: PushupGoalRegistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class PushupGoalRegistRoutingModule { }
  