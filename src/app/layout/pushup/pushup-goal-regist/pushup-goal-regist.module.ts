import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushupGoalRegistComponent } from './pushup-goal-regist.component';
import { PushupGoalRegistRoutingModule } from './pushup-goal-regist-routing.module';

@NgModule({
  imports: [
    CommonModule,PushupGoalRegistRoutingModule
  ],
  declarations: [PushupGoalRegistComponent]
})
export class PushupGoalRegistModule {} 
