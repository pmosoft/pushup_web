export class Pushup {

  // 운동이력 
  usrId       : String; // 유저아이디
  execDtm     : String; // 운동일시
  execCd      : String; // 운동코드 -- 01:pushup
  execDt      : String; // 운동일자
  execCnt     : number; // 운동횟수
  
  // 운동목표이력 
  startDt     : String; // 시작일자
  endDt       : String; // 종료일자 -- 종료일자 >= 시작일자, 99991231는 하나만 존재하고, 신규 시작일자생성시 이전 종료일자을 반드시 세팅
  execGoalCnt : number; // 운동목표횟수

  // 공통 
  regDtm      : String; // 등록일시
  regUsrId    : String; // 등록자
  updDtm      : String; // 변경일시
  updUsrId    : String; // 변경자
      
}
