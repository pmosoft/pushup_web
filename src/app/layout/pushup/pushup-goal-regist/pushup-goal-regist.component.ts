import { Component, OnInit, Input} from '@angular/core';
import { PushupService } from '../pushup.service';
import { Pushup } from '../pushup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pushup-goal-regist',
  templateUrl: './pushup-goal-regist.component.html',
  styleUrls: ['./pushup-goal-regist.component.scss']
})
export class PushupGoalRegistComponent implements OnInit {

  //----------------
  // vo
  //----------------
  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');
  pushupInVo: Pushup = new Pushup();
  pushupOutVoList: Pushup[]

  //----------------
  // select
  //----------------
  exerGoalCntCd = [
    {id: 100, name: "100"},
    {id: 200, name: "200"},
    {id: 300, name: "300"},
    {id: 400, name: "400"},
    {id: 500, name: "500"}
  ];  
  selectedValue : string = "100";

  constructor(private pushupService: PushupService
             ,private router: Router) {}

  ngOnInit() {
    console.log('pushup-goal-regist ngOnInit ');
    this.pushupInVo.usrId = localStorage.getItem('usrId');  
    this.onSelectExerGoalCntHis(this.pushupInVo);
  }

  onChange(deviceValue) {
    //console.log(deviceValue);
    this.selectedValue = deviceValue;
    //console.log(this.selectedValue);
  }

  onSaveExerGoalCntHis(pushup: Pushup) {
    //console.log("pushup.exerGoalCnt=="+pushup.exerGoalCnt);
    console.log("this.pushup.usrId=="+this.pushupInVo.usrId);
    console.log("this.pushup.exerGoalCnt=="+this.selectedValue);
    this.pushupInVo.exerGoalCnt = parseInt(this.selectedValue);

    this.pushupService.saveExerGoalCntHis(this.pushupInVo)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        console.log("success");
        this.onSelectExerGoalCntHis(this.pushupInVo);  
      }  
    });
  }

  onSelectExerGoalCntHis(pushupInVo: Pushup) {
    this.pushupService.selectExerGoalCntHis(this.pushupInVo)
    .subscribe(result => {
       if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.pushupOutVoList = result.pushupOutVoList;  
        console.log(result.pushupOutVoList);  
      } 
    });
  }

}
