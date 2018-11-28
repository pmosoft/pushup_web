import { PushupGoalRegistModule } from './pushup-goal-regist.module';

describe('PushupGoalRegistModule', () => {
  let pushupGoalRegistModule: PushupGoalRegistModule;
 
  beforeEach(() => {
    pushupGoalRegistModule = new PushupGoalRegistModule();
  });

  it('should create an instance', () => {
    expect(pushupGoalRegistModule).toBeTruthy();
  });
});
