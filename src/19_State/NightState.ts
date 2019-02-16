import DayState from "./DayState";
import IContext from "./IContext";
import IState from "./IState";

export default class NightState implements IState {
  public static getInstance(): IState {
    return this.singleton;
  }
  private static singleton = new NightState();
  private constructor() {}
  public doClock(context: IContext, hour: number): void {
    if (9 <= hour && hour < 17) {
      context.changeState(DayState.getInstance());
    }
  }
  public doUse(context: IContext): void {
    context.recording("金庫使用(夜間)");
  }
  public doAlarm(context: IContext): void {
    context.callSecurityCenter("非常ベル(夜間)");
  }
  public doPhone(context: IContext): void {
    context.callSecurityCenter("通常電話(夜間)");
  }
  public toString(): string {
    return "[夜間]";
  }
}
