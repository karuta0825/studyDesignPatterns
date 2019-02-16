import IContext from "./IContext";

export default interface IState {
  doClock(context: IContext, hour: number): void;
  doUse(context: IContext): void;
  doAlarm(context: IContext): void;
  doPhone(context: IContext): void;
}
