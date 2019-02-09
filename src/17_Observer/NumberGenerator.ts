import IObserver from "./IObserver";
export default abstract class NumberGenerator {
  private observers: IObserver[] = [];
  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  public deleteObserver(observer: IObserver): void {
    // this.observers.pop(observer);
  }
  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  public abstract getNumber(): number;
  public abstract execute(): void;
}
