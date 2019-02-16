import IContext from "./IContext";
import IState from "./IState";
import NightState from "./NightState";

export default class DayState implements IState {
  public static getInstance(): IState {
    return this.singleton;
  }
  private static singleton = new DayState();
  private constructor() {}
  public doClock(context: IContext, hour: number): void {
    if (hour < 9 || 17 <= hour) {
      context.changeState(NightState.getInstance());
    }
  }
  public doUse(context: IContext): void {
    context.recording("金庫使用(昼間)");
  }
  public doAlarm(context: IContext): void {
    context.callSecurityCenter("非常ベル(昼間)");
  }
  public doPhone(context: IContext): void {
    context.callSecurityCenter("通常電話(昼間)");
  }
  public toString(): string {
    return "[昼間]";
  }
}
