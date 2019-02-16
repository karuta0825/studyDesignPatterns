import DayState from "./DayState";
import IContext from "./IContext";
import IState from "./IState";

export default class SafeFrame implements IContext {
  private textClock: HTMLDivElement = document.createElement("div");
  private textScreen: HTMLDivElement = document.createElement("div");
  private btnUse: HTMLButtonElement = document.createElement("button");
  private btnAlarm: HTMLButtonElement = document.createElement("button");
  private btnPhone: HTMLButtonElement = document.createElement("button");
  private btnExit: HTMLButtonElement = document.createElement("button");
  private state: IState = DayState.getInstance();

  public constructor() {
    const body = document.querySelector("body");
    this.btnUse.innerHTML = "金庫使用";
    this.btnAlarm.innerHTML = "非常ベル";
    this.btnPhone.innerHTML = "通常電話";

    this.btnUse.addEventListener("click", () => {
      this.state.doUse(this);
    });
    this.btnAlarm.addEventListener("click", () => {
      this.state.doAlarm(this);
    });
    this.btnPhone.addEventListener("click", () => {
      this.state.doPhone(this);
    });
    body.appendChild(this.textClock);
    body.appendChild(this.textScreen);
    body.appendChild(this.btnUse);
    body.appendChild(this.btnAlarm);
    body.appendChild(this.btnPhone);
  }

  public setClock(hour: number): void {
    let clockString = "現在時刻は";
    if (hour < 10) {
      clockString += `0${hour}:00`;
    } else {
      clockString += `${hour}:00`;
    }
    this.textClock.innerHTML = clockString;
    this.state.doClock(this, hour);
  }
  public changeState(state: IState): void {
    console.log(`${this.state}から${state}へ状態が変更しました`);
    this.state = state;
  }
  public callSecurityCenter(msg: string): void {
    const el = document.createElement("p");
    el.innerHTML = `call! ${msg}`;
    this.textScreen.appendChild(el);
  }
  public recording(msg: string): void {
    const el = document.createElement("p");
    el.innerHTML = `recording...${msg}`;
    this.textScreen.append(el);
  }
  public actionPerformed(action: string): void {
    switch (action) {
      case "button":
        this.state.doUse(this);
        break;
      case "alarm":
        this.state.doAlarm(this);
        break;
      case "phone":
        this.state.doPhone(this);
        break;
      default:
        console.log("?");
        break;
    }
  }
}
