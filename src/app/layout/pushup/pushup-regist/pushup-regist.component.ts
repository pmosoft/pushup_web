import { Component, OnInit} from '@angular/core';
import { PushupService } from '../pushup.service';
import { Pushup } from '../pushup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pushup-regist',
  templateUrl: './pushup-regist.component.html',
  styleUrls: ['./pushup-regist.component.scss']
})
export class PushupRegistComponent implements OnInit {

  //----------------
  // vo
  //----------------
  usrId = localStorage.getItem('usrId');
  pushupInVo: Pushup = new Pushup();
  pushupOutVoList: Pushup[]

  todayExerCnt = 0;
  exerGoalCnt  = 100;

  constructor(private pushupService: PushupService
             ,private router: Router) {}

  ngOnInit() {
    this.pushupInVo.usrId = localStorage.getItem('usrId');
    console.log('pushup-regist ngOnInit');  
    this.onSelectExerHis(this.pushupInVo);

  }

  onSaveExerHis(exerCnt) {
    //console.log("pushup.exerGoalCnt=="+pushup.exerGoalCnt);
    console.log("exerCnt=="+exerCnt);
    this.pushupInVo.exerCnt = exerCnt; 

    this.pushupService.saveExerHis(this.pushupInVo)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        console.log("success");
        this.onSelectExerHis(this.pushupInVo);  
      }  
    });    
  }

  onSelectExerHis(pushupInVo: Pushup) {
    this.pushupService.selectExerHis(this.pushupInVo)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.pushupOutVoList = result.pushupOutVoList;
        //this.pushupOutVoList[0]  
        console.log(result.pushupOutVoList);  
        console.log("exerCnt=="+this.pushupOutVoList[0].exerCnt);  
        console.log("exerGoalCnt=="+this.pushupOutVoList[0].exerGoalCnt);
        
        this.todayExerCnt=this.pushupOutVoList[0].todayExerCnt;  
        this.exerGoalCnt=this.pushupOutVoList[0].exerGoalCnt;
        
      } 
    });
  }

}
