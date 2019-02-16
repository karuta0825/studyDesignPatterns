import IState from "./IState";

export default interface IContext {
  setClock(hour: number): void;
  changeState(state: IState): void;
  callSecurityCenter(msg: string): void;
  recording(msg: string): void;
}
