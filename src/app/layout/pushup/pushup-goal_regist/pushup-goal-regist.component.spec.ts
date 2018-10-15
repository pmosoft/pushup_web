import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { PushupGoalRegistComponent } from './pushup-goal-regist.component';

describe('PushupGoalRegistComponent', () => {
  let component: PushupGoalRegistComponent;
  let fixture: ComponentFixture<PushupGoalRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushupGoalRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushupGoalRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
